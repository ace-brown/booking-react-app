const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

exports.sendEmail = functions.https.onCall(async (data, context) => {
  const { email, subject, html } = data;
  const senderEmail = functions.config().gmail.email;

  // Check if user is authenticated
  if (!context.auth) {
    throw new functions.https.HttpsError(
      "unauthenticated",
      "Only authenticated users can send emails"
    );
  }

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: functions.config().gmail.email,
      pass: functions.config().gmail.password,
    },
  });

  // Define email options
  const mailOptions = {
    from: senderEmail,
    to: email,
    subject: subject,
    html: html,
  };

  // Send email using Nodemailer
  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${email}`);
    return { success: true };
  } catch (error) {
    console.error(`Error sending email to ${email}: ${error}`);
    return { success: false };
  }
});
