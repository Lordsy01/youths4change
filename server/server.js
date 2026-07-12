require('dotenv').config();
const express = require('express');
const cors = require('cors');

const contactRoutes = require('./routes/contactRoutes');
const volunteerRoutes = require('./routes/volunteerRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'ok', service: 'Youths4Change Bamenda API' });
});

app.use('/api/contact', contactRoutes);
app.use('/api/volunteer', volunteerRoutes);

// Fallback error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Unexpected server error.' });
});

app.listen(PORT, () => {
  console.log(`Youths4Change API server running on http://localhost:${PORT}`);
});
