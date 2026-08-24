import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import ImagePlaceholder from '../components/ImagePlaceholder.jsx'
import '../styles/contact.css'

const INVOLVEMENT_OPTIONS = [
  { title: 'Volunteer', text: 'Join a program team and contribute your time and skills directly.' },
  { title: 'Partner With Us', text: 'Organizations and businesses can partner on programs or events.' },
  { title: 'Support a Program', text: 'Back a specific initiative like Back-to-School or GreenFuture.' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', interest: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sent'

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    // TODO (backend integration): once the Node.js backend is ready,
    // replace this block with a real request, e.g.:
    //
    //   await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(form),
    //   })
    //
    // For now this just confirms submission locally on the page.
    setStatus('sent')
    setForm({ name: '', email: '', interest: '', message: '' })
  }

  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="Let's build change in Bamenda together."
        description="Whether you want to volunteer, partner with us, or just ask a question — we'd love to hear from you."
      />

      {/* ============ WAYS TO GET INVOLVED ============ */}
      <section className="section">
        <div className="container">
          <div className="grid-3 involvement-grid">
            {INVOLVEMENT_OPTIONS.map((opt) => (
              <div className="involvement-card" key={opt.title}>
                <h3>{opt.title}</h3>
                <p>{opt.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACT FORM + INFO ============ */}
      <section className="section section--alt">
        <div className="container contact-grid">
          <div className="contact-form-wrap">
            <span className="eyebrow">Send a Message</span>
            <h2>Reach out to the team</h2>

            {status === 'sent' && (
              <div className="contact-form__success" role="status">
                Thanks — your message has been noted. We'll get back to you soon.
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Full Name
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </label>

              <label>
                Email Address
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                />
              </label>

              <label>
                I'm interested in
                <select name="interest" value={form.interest} onChange={handleChange} required>
                  <option value="" disabled>Select an option</option>
                  <option value="volunteering">Volunteering</option>
                  <option value="partnership">Partnership</option>
                  <option value="supporting-a-program">Supporting a program</option>
                  <option value="general">General inquiry</option>
                </select>
              </label>

              <label>
                Message
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us a bit about what you're interested in..."
                />
              </label>

              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>

          <div className="contact-info">
            {/* IMAGE SPOT: team/office photo or a map screenshot */}
            <ImagePlaceholder label="Contact page photo" note="Office, meeting spot, or team photo" ratio="wide" />

            <div className="contact-info__block">
              <h4>Location</h4>
              <p>Bamenda, North-West Region, Cameroon</p>
            </div>
            <div className="contact-info__block">
              <h4>Email</h4> 
              <p><a href="youths4changeinit@gmail.com">youths4changeinit@gmail.com</a></p>
            </div>
            <div className="contact-info__block">
              <h4>WhatsApp</h4>
              <p><a href="https://chat.whatsapp.com/FQbpDTU9tvODNGqc9jDoPp?s=cl&p=a&ilr=0">Message</a></p>
            </div>
            <div className="contact-info__block">
              <h4>Follow Us</h4>
              {/* Replace # with real social links */}
              <div className="contact-info__socials">
                <a href="https://www.fb.com/l/6lp1kJRRR">Facebook</a>
                <a href="#">LinkedIn</a>
                <a href="https://www.tiktok.com/@youths4change_initiative?_r=1&_t=ZS-98qtVZW2Yuj">Tiktok</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
