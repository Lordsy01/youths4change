function validateContact(req, res, next) {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are all required.' });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }

  next();
}

function validateVolunteer(req, res, next) {
  const { name, email, age } = req.body;

  if (!name || !email || !age) {
    return res.status(400).json({ error: 'Name, email, and age are required.' });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }

  if (Number(age) < 13) {
    return res.status(400).json({ error: 'Members must be at least 13 years old.' });
  }

  next();
}

module.exports = { validateContact, validateVolunteer };
