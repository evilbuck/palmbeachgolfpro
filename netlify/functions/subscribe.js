const SibApiV3Sdk = require('@getbrevo/brevo');
const validator = require('validator');

// Initialize Brevo API client
const apiInstance = new SibApiV3Sdk.ContactsApi();
const apiKey = apiInstance.authentications['api-key'];
apiKey.apiKey = process.env.BREVO_API_KEY;

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    // Parse the request body
    const { email, name } = JSON.parse(event.body);

    // Validate email
    if (!email || !validator.isEmail(email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid email address' }),
      };
    }

    // Create a new contact
    const createContact = new SibApiV3Sdk.CreateContact();
    createContact.email = email;
    if (name) createContact.attributes = { FIRSTNAME: name };

    // Add the contact to a list (replace LIST_ID with your actual list ID)
    const listIds = [parseInt(process.env.BREVO_LIST_ID, 10)];

    // Call Brevo API to create the contact
    await apiInstance.createContact(createContact);

    // Add the contact to the list
    await apiInstance.addContactToList(listIds[0], { emails: [email] });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Subscribed successfully!' }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};