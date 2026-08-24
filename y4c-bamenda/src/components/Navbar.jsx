import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/contact', label: 'Get Involved' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  // Close the mobile menu whenever the viewport is resized back to desktop
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 860) setOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <NavLink to="/" className="navbar__brand" onClick={() => setOpen(false)}>
          {/* IMAGE SPOT: Organization logo — replace text-mark below with <img src={logo} alt="Youths 4 Change Bamenda logo" /> */}
          <span className="navbar__brand-mark">Y4C</span>
          <span className="navbar__brand-text">
            Youths 4 Change
            <small>Bamenda</small>
          </span>
        </NavLink>

        <button
          className={`navbar__toggle ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`navbar__links ${open ? 'is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => 'navbar__link' + (isActive ? ' is-active' : '')}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="btn btn-primary navbar__cta" onClick={() => setOpen(false)}>
            Get Involved
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
