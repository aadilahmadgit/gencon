// Test Zoho CRM Connection
// Run with: node test-zoho.js

const https = require('https');
const querystring = require('querystring');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config({ path: '.env.local' });

function makeHttpsRequest(options, data = null) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => {
        body += chunk;
      });
      res.on('end', () => {
        try {
          const jsonBody = JSON.parse(body);
          resolve({ statusCode: res.statusCode, body: jsonBody });
        } catch (e) {
          resolve({ statusCode: res.statusCode, body });
        }
      });
    });

    req.on('error', (err) => {
      reject(err);
    });

    if (data) {
      req.write(data);
    }
    req.end();
  });
}

async function testZohoConnection() {
  console.log('🧪 Testing Zoho CRM Connection...\n');

  const {
    ZOHO_REFRESH_TOKEN,
    ZOHO_CLIENT_ID,
    ZOHO_CLIENT_SECRET,
    ZOHO_ACCOUNTS_SERVER,
    ZOHO_API_SERVER
  } = process.env;

  console.log('🔑 Credentials loaded:');
  console.log('   Org ID:', process.env.ZOHO_ORG_ID);
  console.log('   Client ID:', ZOHO_CLIENT_ID ? '✅ Set' : '❌ Missing');
  console.log('   Client Secret:', ZOHO_CLIENT_SECRET ? '✅ Set' : '❌ Missing');
  console.log('   Refresh Token:', ZOHO_REFRESH_TOKEN ? '✅ Set' : '❌ Missing');
  console.log('   Accounts Server:', ZOHO_ACCOUNTS_SERVER);
  console.log('   API Server:', ZOHO_API_SERVER);
  console.log('');

  // Step 1: Get Access Token
  console.log('🔄 Step 1: Getting access token...');

  const tokenData = querystring.stringify({
    refresh_token: ZOHO_REFRESH_TOKEN,
    client_id: ZOHO_CLIENT_ID,
    client_secret: ZOHO_CLIENT_SECRET,
    grant_type: 'refresh_token',
  });

  const tokenOptions = {
    hostname: 'accounts.zoho.in',
    path: '/oauth/v2/token',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(tokenData),
    },
  };

  try {
    const tokenResponse = await makeHttpsRequest(tokenOptions, tokenData);
    console.log('   Token request status:', tokenResponse.statusCode);

    if (tokenResponse.statusCode !== 200) {
      console.log('❌ Token request failed:', tokenResponse.body);
      return;
    }

    const tokenJson = typeof tokenResponse.body === 'string' ? JSON.parse(tokenResponse.body) : tokenResponse.body;
    console.log('✅ Token obtained successfully');
    console.log('   Access Token:', tokenJson.access_token ? '✅ Received' : '❌ Missing');
    console.log('   Expires in:', tokenJson.expires_in, 'seconds');
    console.log('');

    // Step 2: Test Lead Creation
    console.log('📤 Step 2: Testing lead creation...');

    const testLead = {
      data: [
        {
          First_Name: 'Test',
          Last_Name: 'User',
          Email: 'test@example.com',
          Phone: '+919876543210',
          City: 'Dubai',
          Description: 'Test lead from API',
          Lead_Source: 'Website',
          Lead_Status: 'Contacted',
          Service_Type: 'AC Repair',
        },
      ],
    };

    const leadData = JSON.stringify(testLead);
    const leadOptions = {
      hostname: 'www.zohoapis.in',
      path: '/crm/v2/Leads',
      method: 'POST',
      headers: {
        'Authorization': `Zoho-oauthtoken ${tokenJson.access_token}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(leadData),
      },
    };

    const leadResponse = await makeHttpsRequest(leadOptions, leadData);
    console.log('   Lead creation status:', leadResponse.statusCode);

    if (leadResponse.statusCode !== 201) {
      console.log('❌ Lead creation failed:', leadResponse.body);
      return;
    }

    const leadJson = typeof leadResponse.body === 'string' ? JSON.parse(leadResponse.body) : leadResponse.body;
    console.log('✅ Lead created successfully!');
    console.log('   Lead ID:', leadJson.data?.[0]?.details?.id || 'Unknown');
    console.log('');

    console.log('🎉 All tests passed! Zoho CRM integration is working.');

  } catch (error) {
    console.error('❌ Test failed with error:', error.message);
  }
}

testZohoConnection().catch(console.error);