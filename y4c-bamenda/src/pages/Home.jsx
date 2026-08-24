import { Link } from 'react-router-dom'
import ImagePlaceholder from '../components/ImagePlaceholder.jsx'
import ProgramCard from '../components/ProgramCard.jsx'
import ToghuBand from '../components/ToghuBand.jsx'
import { PROGRAMS } from '../data/programs.js'
import '../styles/home.css'

const PILLARS = [
  {
    title: 'Skills & Education',
    text: 'From IT literacy to career mentorship, we help young people build skills that open doors.',
  },
  {
    title: 'Safety & Wellbeing',
    text: 'Digital safety, scam awareness and community welfare support for those who need it most.',
  },
  {
    title: 'Voice & Innovation',
    text: 'Platforms for youth ideas, civic participation and community problem-solving to be heard.',
  },
]

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__text">
            <span className="eyebrow">Youths 4 Change &middot; Bamenda</span>
            <h1>Young people, leading change in Bamenda.</h1>
            <p>
              We are a youth-led organization working across the Bamenda community &mdash;
              building skills, opportunity, safety and solidarity, one program at a time.
            </p>
            <div className="hero__actions">
              <Link to="/programs" className="btn btn-primary">Explore Our Programs</Link>
              <Link to="/contact" className="btn btn-outline">Get Involved</Link>
            </div>
          </div>
          <div className="hero__image">
            {/* IMAGE SPOT: main hero photo — a strong group/action shot of Y4C members or a program in action */}
            <ImagePlaceholder label="Hero photo" note="Wide photo of youth members or a program in action" ratio="wide" />
          </div>
        </div>
      </section>

      <ToghuBand tone="dark" />

      {/* ============ IMPACT STRIP ============ */}
      <section className="section section--dark impact-strip">
        <div className="container impact-strip__grid">
          <div className="impact-strip__item">
            <span className="impact-strip__value">9</span>
            <span className="impact-strip__label">Active Programs</span>
          </div>
          <div className="impact-strip__item">
            <span className="impact-strip__value">100+</span>
            <span className="impact-strip__label">Youth Reached</span>
          </div>
          <div className="impact-strip__item">
            <span className="impact-strip__value">Bamenda</span>
            <span className="impact-strip__label">Community-Rooted</span>
          </div>
          <div className="impact-strip__item">
            <span className="impact-strip__value">Youth-Led</span>
            <span className="impact-strip__label">Run By Young People</span>
          </div>
        </div>
      </section>

      {/* ============ MISSION SNAPSHOT ============ */}
      <section className="section">
        <div className="container mission-snapshot">
          <div className="mission-snapshot__image">
            {/* IMAGE SPOT: photo of founders/team or a general community moment */}
            <ImagePlaceholder label="About / mission photo" note="Team or community photo" ratio="tall" />
          </div>
          <div className="mission-snapshot__text">
            <span className="eyebrow">Who We Are</span>
            <h2>Built by young people who wanted to see change in their own community.</h2>
            <p>
              Youths 4 Change Bamenda brings together young volunteers around a shared
              belief: that the people best placed to improve a community are the ones
              growing up in it. Every program we run is designed, led and carried out
              by youth &mdash; for the benefit of the wider Bamenda community.
            </p>
            <Link to="/about" className="btn btn-outline">Read Our Full Story</Link>
          </div>
        </div>
      </section>

      {/* ============ PILLARS ============ */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">What Drives Us</span>
            <h2>Three things every program has in common.</h2>
          </div>
          <div className="grid-3 pillars">
            {PILLARS.map((pillar) => (
              <div className="pillar-card" key={pillar.title}>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED PROGRAMS ============ */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Our Programs</span>
            <h2>Nine programs. One goal: real change.</h2>
            <p>A closer look at how we put our mission into action across Bamenda.</p>
          </div>
          <div className="grid-auto">
            {PROGRAMS.map((program) => (
              <ProgramCard program={program} key={program.slug} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA BANNER ============ */}
      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <div>
            <h2>Want to be part of the change?</h2>
            <p>Volunteer, partner with us, or support a program that speaks to you.</p>
          </div>
          <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
        </div>
      </section>
    </>
  )
}
