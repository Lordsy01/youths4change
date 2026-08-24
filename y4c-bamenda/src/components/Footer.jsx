import { Link } from 'react-router-dom'
import ToghuBand from './ToghuBand.jsx'
import { PROGRAMS } from '../data/programs.js'
import '../styles/footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <ToghuBand tone="dark" />
      <div className="footer__main">
        <div className="container footer__grid">
          <div className="footer__about">
            <div className="footer__brand">
              {/* IMAGE SPOT: white/light logo mark for dark background */}
              <span className="footer__brand-mark">Y4C</span>
              <span>Youths 4 Change Bamenda</span>
            </div>
            <p>
              A youth-led organization in Bamenda working across education, skills,
              safety and community welfare — built by young people, for young people.
            </p>
          </div>

          <div className="footer__col">
            <h4>Explore</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/programs">Our Programs</Link></li>
              <li><Link to="/contact">Get Involved</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Programs</h4>
            <ul>
              {PROGRAMS.slice(0, 5).map((p) => (
                <li key={p.slug}>
                  <Link to={`/programs/${p.slug}`}>{p.shortName}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Contact</h4>
            <ul className="footer__contact">
              <li>Bamenda, North-West Region, Cameroon</li>
              {/* Replace with real contact details */}
              <li><a href="mailto:info@youths4changebamenda.org">info@youths4changebamenda.org</a></li>
              <li><a href="tel:+237000000000">+237 6XX XXX XXX</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {year} Youths 4 Change Bamenda. All rights reserved.</span>
          <span className="footer__tagline">Youth-led. Community-grown.</span>
        </div>
      </div>
    </footer>
  )
}
