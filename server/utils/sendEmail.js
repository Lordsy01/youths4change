/**
 * Email notifications are OFF by default so the server runs with zero
 * configuration. To enable real email notifications:
 *
 *   1. npm install nodemailer
 *   2. Add SMTP credentials to server/.env (see .env.example)
 *   3. Uncomment the nodemailer code below
 *
 * Until then, this just logs to the console — submissions are still
 * safely saved to server/data/*.json by utils/storage.js.
 */
async function sendEmail({ subject, text }) {
  console.log(`\n[email notification - not sent, SMTP not configured]\nSubject: ${subject}\n${text}\n`);

  // Example real implementation with nodemailer:
  //
  // const nodemailer = require('nodemailer');
  // const transporter = nodemailer.createTransport({
  //   host: process.env.SMTP_HOST,
  //   port: process.env.SMTP_PORT,
  //   auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  // });
  // await transporter.sendMail({
  //   from: process.env.SMTP_USER,
  //   to: process.env.NOTIFY_EMAIL,
  //   subject,
  //   text,
  // });

  return Promise.resolve();
}

module.exports = { sendEmail };
