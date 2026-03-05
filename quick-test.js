// Quick test after updating refresh token
// Run: node quick-test.js

const https = require('https');
const querystring = require('querystring');
const dotenv = require('dotenv');

dotenv.config({ path: '.env.local' });

function makeRequest(options, data = null) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, body: JSON.parse(body) });
        } catch (e) {
          resolve({ status: res.statusCode, body });
        }
      });
    });
    req.on('error', reject);
    if (data) req.write(data);
    req.end();
  });
}

async function quickTest() {
  console.log('🚀 Quick Zoho Test...\n');

  const { ZOHO_REFRESH_TOKEN, ZOHO_CLIENT_ID, ZOHO_CLIENT_SECRET } = process.env;

  if (!ZOHO_REFRESH_TOKEN || !ZOHO_CLIENT_ID || !ZOHO_CLIENT_SECRET) {
    console.log('❌ Missing credentials in .env.local');
    return;
  }

  try {
    // Get token
    const tokenData = querystring.stringify({
      refresh_token: ZOHO_REFRESH_TOKEN,
      client_id: ZOHO_CLIENT_ID,
      client_secret: ZOHO_CLIENT_SECRET,
      grant_type: 'refresh_token',
    });

    const tokenResponse = await makeRequest({
      hostname: 'accounts.zoho.in',
      path: '/oauth/v2/token',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(tokenData),
      },
    }, tokenData);

    if (tokenResponse.status !== 200) {
      console.log('❌ Token failed:', tokenResponse.body);
      return;
    }

    const token = tokenResponse.body.access_token;
    if (!token) {
      console.log('❌ No access token received');
      return;
    }

    console.log('✅ Token working!');

    // Test lead creation
    const leadData = JSON.stringify({
      data: [{
        First_Name: 'Test',
        Last_Name: 'User',
        Email: 'test@example.com',
        Phone: '+919876543210',
        Description: 'Quick test',
        Lead_Source: 'Website'
      }]
    });

    const leadResponse = await makeRequest({
      hostname: 'www.zohoapis.in',
      path: '/crm/v2/Leads',
      method: 'POST',
      headers: {
        'Authorization': `Zoho-oauthtoken ${token}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(leadData),
      },
    }, leadData);

    if (leadResponse.status === 201) {
      console.log('🎉 SUCCESS! Contact form will work now!');
    } else {
      console.log('❌ Lead creation failed:', leadResponse.body);
    }

  } catch (error) {
    console.log('❌ Error:', error.message);
  }
}

quickTest();