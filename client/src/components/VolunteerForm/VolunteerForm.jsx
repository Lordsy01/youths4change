import { useState } from 'react';
import '../ContactForm/ContactForm.css'; // shares the same form styling

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const INTEREST_OPTIONS = [
  'Orphanage & Elderly Visits',
  'EmpowerHer',
  'GreenFuture',
  'Back-to-School Campaign',
  'Mentorship & Career Guidance',
];

function VolunteerForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', age: '', interest: INTEREST_OPTIONS[0], message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(`${API_URL}/api/volunteer`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      setForm({ name: '', email: '', phone: '', age: '', interest: INTEREST_OPTIONS[0], message: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__row">
        <label htmlFor="v-name">Full name</label>
        <input id="v-name" name="name" type="text" required value={form.name} onChange={handleChange} />
      </div>

      <div className="contact-form__row">
        <label htmlFor="v-email">Email address</label>
        <input id="v-email" name="email" type="email" required value={form.email} onChange={handleChange} />
      </div>

      <div className="contact-form__row">
        <label htmlFor="v-phone">Phone number</label>
        <input id="v-phone" name="phone" type="tel" value={form.phone} onChange={handleChange} />
      </div>

      <div className="contact-form__row">
        <label htmlFor="v-age">Age</label>
        <input id="v-age" name="age" type="number" min="13" required value={form.age} onChange={handleChange} />
      </div>

      <div className="contact-form__row">
        <label htmlFor="v-interest">Which project interests you most?</label>
        <select id="v-interest" name="interest" value={form.interest} onChange={handleChange}>
          {INTEREST_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div className="contact-form__row">
        <label htmlFor="v-message">Tell us why you'd like to join (optional)</label>
        <textarea id="v-message" name="message" rows="4" value={form.message} onChange={handleChange} />
      </div>

      <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Submitting…' : 'Submit application'}
      </button>

      {status === 'success' && <p className="contact-form__status contact-form__status--ok">Welcome! We've received your application and will reach out soon.</p>}
      {status === 'error' && <p className="contact-form__status contact-form__status--error">Something went wrong. Please try again.</p>}
    </form>
  );
}

export default VolunteerForm;
