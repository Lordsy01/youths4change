import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__col footer__brand">
          <span className="footer__mark">Y4C</span>
          <p>Youths4Change Initiative — Bamenda Branch</p>
          <p className="footer__slogan">"Together, we change the world."</p>
        </div>

        <div className="footer__col">
          <h4>Explore</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/projects">Our Projects</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/get-involved">Get Involved</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <ul>
            <li>Bamenda, North-West Region, Cameroon</li>
            <li><a href="mailto:info@youths4change.org">info@youths4change.org</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Follow Us</h4>
          <ul className="footer__social">
            <li><a href="#" aria-label="Facebook">Facebook</a></li>
            <li><a href="#" aria-label="Instagram">Instagram</a></li>
            <li><a href="#" aria-label="WhatsApp">WhatsApp</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© {year} Youths4Change Initiative, Bamenda. Founded by Inares Kenne Tsangue.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
