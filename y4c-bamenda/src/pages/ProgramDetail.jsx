import { useParams, Link, Navigate } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import ImagePlaceholder from '../components/ImagePlaceholder.jsx'
import ProgramCard from '../components/ProgramCard.jsx'
import { PROGRAMS, getProgramBySlug } from '../data/programs.js'
import '../styles/programDetail.css'

/**
 * ProgramDetail
 * -------------
 * Renders the individual page for EACH of the 9 activities, based on the
 * :slug URL param (e.g. /programs/empowerher-initiative). Content comes
 * from src/data/programs.js — edit that file to change any program's text.
 */
export default function ProgramDetail() {
  const { slug } = useParams()
  const program = getProgramBySlug(slug)

  if (!program) {
    return <Navigate to="/programs" replace />
  }

  const otherPrograms = PROGRAMS.filter((p) => p.slug !== program.slug).slice(0, 3)

  return (
    <>
      <PageHero eyebrow={program.category} title={program.name} description={program.tagline} />

      {/* ============ HERO IMAGE + SUMMARY ============ */}
      <section className="section">
        <div className="container program-detail__top">
          <div className="program-detail__hero-image">
            {/* IMAGE SPOT: see program.heroImageLabel below */}
            <ImagePlaceholder label={program.heroImageLabel} note={program.heroImageNote} ratio="wide" />
          </div>
          <p className="program-detail__summary">{program.summary}</p>
        </div>
      </section>

      {/* ============ GOALS + ACTIVITIES ============ */}
      <section className="section section--alt">
        <div className="container program-detail__columns">
          <div>
            <span className="eyebrow">Goals</span>
            <h2>What we're working toward</h2>
            <ul className="program-detail__list">
              {program.goals.map((goal) => (
                <li key={goal}>{goal}</li>
              ))}
            </ul>
          </div>
          <div>
            <span className="eyebrow">Activities</span>
            <h2>What this looks like in practice</h2>
            <ul className="program-detail__list">
              {program.activities.map((activity) => (
                <li key={activity}>{activity}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ WHO IT'S FOR ============ */}
      <section className="section">
        <div className="container program-detail__who">
          <span className="eyebrow">Who It's For</span>
          <h2>{program.whoItsFor}</h2>
        </div>
      </section>

      {/* ============ GALLERY ============ */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Gallery</span>
            <h2>{program.shortName} in action</h2>
          </div>
          <div className="grid-3 program-detail__gallery">
            {program.galleryLabels.map((img) => (
              // IMAGE SPOT: see label/note below
              <ImagePlaceholder key={img.label} label={img.label} note={img.note} ratio="wide" />
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <div>
            <h2>Want to support {program.shortName}?</h2>
            <p>Volunteer, partner with us, or reach out to learn how to help.</p>
          </div>
          <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
        </div>
      </section>

      {/* ============ OTHER PROGRAMS ============ */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Explore More</span>
            <h2>Other programs you might be interested in</h2>
          </div>
          <div className="grid-auto">
            {otherPrograms.map((p) => (
              <ProgramCard program={p} key={p.slug} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
