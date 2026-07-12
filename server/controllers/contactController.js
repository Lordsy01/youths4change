const { appendEntry } = require('../utils/storage');
const { sendEmail } = require('../utils/sendEmail');

async function submitContact(req, res) {
  const { name, email, message } = req.body;

  try {
    appendEntry('contact-submissions.json', { name, email, message });

    await sendEmail({
      subject: `New contact message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    res.status(201).json({ success: true, message: 'Message received.' });
  } catch (err) {
    console.error('Error handling contact submission:', err);
    res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
}

module.exports = { submitContact };
