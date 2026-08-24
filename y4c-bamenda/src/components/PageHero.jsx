import ToghuBand from './ToghuBand.jsx'
import '../styles/pageHero.css'

/**
 * PageHero — the dark banner used at the top of inner pages
 * (About, Programs, Program Detail, Contact) to keep a consistent
 * identity across the site without repeating the big home hero.
 */
export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
      <ToghuBand tone="dark" />
    </section>
  )
}
