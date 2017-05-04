/*jshint esversion: 6 */
const functions = require('firebase-functions');

// config.json holds your SendGrid api key. Make sure config.json is
// not being tracked by git.
const config = require('./config.json');
const sgKey = config.sgKey;

// Place desired destination email address in config.json
const sgEmailRecipient = config.sgEmail;

const sg = require('sendgrid')(sgKey);

// Create url ending at /sendContactMail
// which sends contact form via email.
exports.sendContactMail = functions.https.onRequest((req, res) => {
  const formData = JSON.parse(req.body);
  sendContactMail(formData);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.send("Mail Successfully Sent!");
});

function sendContactMail(formData) {
  const mailRequest = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: {
      personalizations: [{
        to: [{ email: sgEmailRecipient }],
        subject: `Contact Us Form Submitted from - ${formData.userFirstName} ${formData.userLastName}`
      }],
      from: { email: 'donotreply@nlm-photography.firebaseapp.com' },
      content: [{
        type: 'text/plain',
        value: `
          A visitor on your website has reached out to contact you. Here is their information:

            Name: ${formData.userFirstName} ${formData.userLastName}
            Email: ${formData.userEmail}
            Phone: ${formData.userPhone.areaCode}-${formData.userPhone.prefixCode}-${formData.userPhone.suffixCode}
            Wedding Date: ${formData.weddingDate.dateMM}-${formData.weddingDate.dateDD}-${formData.weddingDate.dateYY}
            Venue: ${formData.venue}
            Extra Information: ${formData.extraInfo}
        `
      }]
    }
  });

  sg.API(mailRequest, function (error, response) {
    if (error) {
      console.log('Mail not sent; see error message below.');
    } else {
      console.log('Mail sent successfully!');
    }
    console.log(response);
  });
}
