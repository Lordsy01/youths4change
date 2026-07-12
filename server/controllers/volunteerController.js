const { appendEntry } = require('../utils/storage');
const { sendEmail } = require('../utils/sendEmail');

async function submitVolunteer(req, res) {
  const { name, email, phone, age, interest, message } = req.body;

  try {
    appendEntry('volunteer-submissions.json', { name, email, phone, age, interest, message });

    await sendEmail({
      subject: `New volunteer application from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nAge: ${age}\nInterested in: ${interest}\n\n${message || ''}`,
    });

    res.status(201).json({ success: true, message: 'Application received.' });
  } catch (err) {
    console.error('Error handling volunteer submission:', err);
    res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
}

module.exports = { submitVolunteer };
