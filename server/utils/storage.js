const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data');

function ensureFile(filename) {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  const filePath = path.join(DATA_DIR, filename);
  if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, '[]');
  return filePath;
}

function appendEntry(filename, entry) {
  const filePath = ensureFile(filename);
  const existing = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  existing.push({ ...entry, submittedAt: new Date().toISOString() });
  fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));
}

module.exports = { appendEntry };
