import PageHero from '../components/PageHero.jsx'
import ImagePlaceholder from '../components/ImagePlaceholder.jsx'
import { Link } from 'react-router-dom'
import '../styles/about.css'

const VALUES = [
  { title: 'Youth Leadership', text: 'Every program is designed and run by young people, not for them.' },
  { title: 'Community First', text: 'We start with what Bamenda actually needs, not what looks good on paper.' },
  { title: 'Integrity', text: 'We are accountable to our members, our partners and the communities we serve.' },
  { title: 'Inclusion', text: 'Our doors are open regardless of background, gender or status.' },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A youth-led organization rooted in Bamenda."
        description="Youths 4 Change Bamenda exists to give young people the skills, safety and platforms they need to shape their own community's future."
      />

      {/* ============ MISSION / VISION ============ */}
      <section className="section">
        <div className="container about-grid">
          <div>
            <span className="eyebrow">Our Mission</span>
            <h2>Empowering Bamenda's youth to lead lasting change.</h2>
            {/* NOTE: replace this paragraph with the exact mission statement
                from the organization's constitution once available. */}
            <p>
              We equip young people in Bamenda with practical skills, mentorship,
              safe spaces and platforms for civic participation &mdash; so they can
              improve their own lives and the wellbeing of their community.
            </p>
          </div>
          <div>
            <span className="eyebrow">Our Vision</span>
            <h2>A Bamenda where every young person can thrive.</h2>
            {/* NOTE: replace this paragraph with the exact vision statement
                from the organization's constitution once available. */}
            <p>
              We envision a community where young people have equal access to
              education, opportunity and support &mdash; and are active participants
              in decisions that shape their future.
            </p>
          </div>
        </div>
      </section>

      {/* ============ STORY ============ */}
      <section className="section section--alt">
        <div className="container story-grid">
          <div className="story-grid__image">
            {/* IMAGE SPOT: founding team, early activity, or a defining group photo */}
            <ImagePlaceholder label="Our story photo" note="Founding team or an early activity" ratio="wide" />
          </div>
          <div className="story-grid__text">
            <span className="eyebrow">Our Story</span>
            <h2>Started by young people who saw a gap &mdash; and decided to fill it.</h2>
            <p>
              Youths 4 Change Bamenda began with a small group of young people who
              noticed the same challenges coming up again and again across their
              community: limited access to skills training, few safe spaces for
              mentorship, and few structured ways for youth voices to be heard.
              Rather than wait for someone else to act, they organized.
            </p>
            <p>
              What started as informal meet-ups has grown into a structured,
              constitution-governed organization running programs across education,
              digital literacy, gender empowerment, the environment, and community
              welfare &mdash; all designed and led by youth volunteers.
            </p>
          </div>
        </div>
      </section>

      {/* ============ VALUES ============ */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Our Values</span>
            <h2>What guides every program we run.</h2>
          </div>
          <div className="grid-auto values-grid">
            {VALUES.map((v) => (
              <div className="value-card" key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STRUCTURE (per constitution) ============ */}
      <section className="section section--alt">
        <div className="container structure-block">
          <span className="eyebrow">How We're Organized</span>
          <h2>Governed by our constitution, run by our members.</h2>
          <p>
            Youths 4 Change Bamenda operates under a formal constitution that
            defines our leadership structure, membership guidelines and
            decision-making process. Our executive team and program coordinators
            are elected/appointed from among our own membership, ensuring the
            organization stays accountable to the young people it represents.
          </p>
          {/* NOTE: replace this block with the actual leadership/executive
              structure once the constitution content is available
              (e.g. President, Vice President, Secretary General, Treasurer,
              Program Coordinators, etc.) */}
          <div className="structure-note">
            <p>
              <strong>Coming soon:</strong> a full breakdown of our executive
              structure and leadership team, drawn directly from our constitution.
            </p>
          </div>
        </div>
      </section>

      {/* ============ TEAM ============ */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Our Team</span>
            <h2>The people behind the programs.</h2>
          </div>
          <div className="grid-auto team-grid">
            {[1, 2, 3, 4].map((n) => (
              <div className="team-card" key={n}>
                {/* IMAGE SPOT: headshot for team member #{n} */}
                <ImagePlaceholder label={`Team member ${n} photo`} note="Headshot, square crop" ratio="square" />
                <h4>Full Name</h4>
                <span className="team-card__role">Role / Position</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <div>
            <h2>Curious about our programs?</h2>
            <p>See everything we're currently running across Bamenda.</p>
          </div>
          <Link to="/programs" className="btn btn-primary">View Programs</Link>
        </div>
      </section>
    </>
  )
}
