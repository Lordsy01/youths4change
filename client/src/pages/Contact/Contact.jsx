import ContactForm from '../../components/ContactForm/ContactForm';
import './Contact.css';

function Contact() {
  return (
    <section className="section contact-page">
      <div className="container contact-page__grid">
        <div>
          <span className="eyebrow">Get in Touch</span>
          <h1 className="underline-accent">Contact Us</h1>
          <p className="contact-page__lead">
            Have a question, partnership idea, or just want to say hello? Reach out — we'd love
            to hear from you.
          </p>

          <ul className="contact-info">
            <li>
              <strong>Location</strong>
              <span>Bamenda, North-West Region, Cameroon</span>
            </li>
            <li>
              <strong>Email</strong>
              <span><a href="mailto:info@youths4change.org">info@youths4change.org</a></span>
            </li>
            <li>
              <strong>Follow us</strong>
              <span>Facebook · Instagram · WhatsApp</span>
            </li>
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
