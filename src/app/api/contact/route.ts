import { NextRequest, NextResponse } from 'next/server';

interface ZohoTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  serviceType: string;
  message: string;
}

// In-memory token storage (use Redis in production)
let cachedToken: { access_token: string; expiresAt: number } | null = null;

// Validate input
function validateInput(data: ContactFormData): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.firstName?.trim()) errors.push('First name is required');
  if (!data.lastName?.trim()) errors.push('Last name is required');
  if (!data.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.push('Valid email is required');
  if (!data.phone?.trim() || !/^\+?[\d\s\-()]{10,}$/.test(data.phone.replace(/\s/g, ''))) errors.push('Valid phone number is required');
  if (!data.message?.trim()) errors.push('Message is required');
  if (!data.serviceType?.trim()) errors.push('Service type is required');

  return {
    valid: errors.length === 0,
    errors,
  };
}

// Get Zoho access token
async function getZohoAccessToken(): Promise<string> {
  // Check if cached token is still valid
  if (cachedToken && cachedToken.expiresAt > Date.now()) {
    console.log('✅ Using cached Zoho token');
    return cachedToken.access_token;
  }

  try {
    console.log('🔄 Requesting new Zoho token...');
    const response = await fetch(`${process.env.ZOHO_ACCOUNTS_SERVER}/oauth/v2/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        refresh_token: process.env.ZOHO_REFRESH_TOKEN!,
        client_id: process.env.ZOHO_CLIENT_ID!,
        client_secret: process.env.ZOHO_CLIENT_SECRET!,
        grant_type: 'refresh_token',
      }).toString(),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Token request failed:', response.status, errorText);
      throw new Error(`Zoho token request failed: ${response.statusText} - ${errorText}`);
    }

    const data: ZohoTokenResponse = await response.json();
    cachedToken = {
      access_token: data.access_token,
      expiresAt: Date.now() + (data.expires_in - 60) * 1000,
    };
    console.log('✅ New Zoho token obtained');
    return data.access_token;
  } catch (error) {
    console.error('❌ Zoho token error:', error);
    throw new Error('Failed to authenticate with Zoho CRM: ' + (error as Error).message);
  }
}

// Create lead in Zoho CRM
async function createZohoLead(data: ContactFormData, accessToken: string): Promise<void> {
  const leadData = {
    data: [
      {
        First_Name: data.firstName,
        Last_Name: data.lastName,
        Email: data.email,
        Phone: data.phone,
        City: data.location,
        Description: data.message,
        Lead_Source: 'Website',
        Lead_Status: 'Contacted',
        Service_Type: data.serviceType,
      },
    ],
  };

  try {
    console.log('📤 Sending lead to Zoho CRM...');
    console.log('📋 Lead Data:', JSON.stringify(leadData, null, 2));
    console.log('🔗 API URL:', `${process.env.ZOHO_API_SERVER}/crm/v2/Leads`);

    const response = await fetch(
      `${process.env.ZOHO_API_SERVER}/crm/v2/Leads`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Zoho-oauthtoken ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData),
      }
    );

    console.log('📊 Zoho Response Status:', response.status);

    if (!response.ok) {
      const errorData = await response.json();
      console.error('❌ Zoho API Error Details:', JSON.stringify(errorData, null, 2));
      throw new Error(`Failed to create lead in Zoho: ${JSON.stringify(errorData)}`);
    }

    const successData = await response.json();
    console.log('✅ Lead created successfully in Zoho:', successData);
  } catch (error) {
    console.error('❌ Zoho lead creation error:', error);
    throw error;
  }
}

// Rate limiting (simple in-memory implementation)
const requestCounts = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = requestCounts.get(ip);

  if (!limit || limit.resetTime < now) {
    requestCounts.set(ip, { count: 1, resetTime: now + 60 * 1000 }); // 1 minute window
    return true;
  }

  if (limit.count >= 5) { // Max 5 requests per minute
    return false;
  }

  limit.count++;
  return true;
}

// Main API handler
export async function POST(request: NextRequest) {
  console.log('\n========== CONTACT FORM SUBMISSION ==========');
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               'unknown';

    console.log('📍 Request from IP:', ip);

    // Rate limiting check
    if (!checkRateLimit(ip)) {
      console.log('⚠️ Rate limit exceeded for IP:', ip);
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    console.log('📨 Received form data:', body);

    const contactData: ContactFormData = {
      firstName: body.firstName?.trim() || '',
      lastName: body.lastName?.trim() || '',
      email: body.email?.trim().toLowerCase() || '',
      phone: body.phone?.trim() || '',
      location: body.location?.trim() || '',
      serviceType: body.serviceType?.trim() || '',
      message: body.message?.trim() || '',
    };

    console.log('✏️ Processed data:', contactData);

    // Validate input
    const validation = validateInput(contactData);
    if (!validation.valid) {
      console.log('❌ Validation errors:', validation.errors);
      return NextResponse.json(
        { error: 'Validation failed', details: validation.errors },
        { status: 400 }
      );
    }

    console.log('✅ Validation passed');

    // Get Zoho access token
    const accessToken = await getZohoAccessToken();

    // Create lead in Zoho CRM
    await createZohoLead(contactData, accessToken);

    // Success response
    console.log('🎉 Form submission successful!');
    console.log('========== END SUBMISSION ==========\n');
    return NextResponse.json(
      {
        success: true,
        message: 'Thanks for contacting us! We will get back to you soon.',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('❌ ERROR:', error);
    console.log('========== END SUBMISSION ==========\n');
    return NextResponse.json(
      {
        error: 'Failed to process your request. Please try again later.',
        details: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined,
      },
      { status: 500 }
    );
  }
}
