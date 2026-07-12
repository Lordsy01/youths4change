import { useState } from 'react';
import './ContactForm.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__row">
        <label htmlFor="name">Full name</label>
        <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} />
      </div>

      <div className="contact-form__row">
        <label htmlFor="email">Email address</label>
        <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} />
      </div>

      <div className="contact-form__row">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" required value={form.message} onChange={handleChange} />
      </div>

      <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>

      {status === 'success' && <p className="contact-form__status contact-form__status--ok">Thanks — your message has been sent. We'll get back to you soon.</p>}
      {status === 'error' && <p className="contact-form__status contact-form__status--error">Something went wrong. Please try again, or email us directly.</p>}
    </form>
  );
}

export default ContactForm;
