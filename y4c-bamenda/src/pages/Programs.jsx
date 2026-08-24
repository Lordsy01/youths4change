import PageHero from '../components/PageHero.jsx'
import ProgramCard from '../components/ProgramCard.jsx'
import { PROGRAMS } from '../data/programs.js'
import '../styles/programs.css'

export default function Programs() {
  return (
    <>
      <PageHero
        eyebrow="Our Programs"
        title="Nine programs, one mission."
        description="Every program we run is designed by youths, for youth — tackling a specific gap we see in our own community. Tap into any program below for the full picture."
      />

      <section className="section">
        <div className="container">
          <div className="grid-auto programs-overview-grid">
            {PROGRAMS.map((program) => (
              <ProgramCard program={program} key={program.slug} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
