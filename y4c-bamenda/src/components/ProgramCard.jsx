import { Link } from 'react-router-dom'
import ImagePlaceholder from './ImagePlaceholder.jsx'
import '../styles/programCard.css'

export default function ProgramCard({ program }) {
  return (
    <Link to={`/programs/${program.slug}`} className="program-card">
      <ImagePlaceholder
        label={`${program.shortName} thumbnail`}
        note="Square photo representing this program"
        ratio="square"
      />
      <div className="program-card__body">
        <span className="eyebrow">{program.category}</span>
        <h3>{program.name}</h3>
        <p>{program.tagline}</p>
        <span className="program-card__link">Learn more &rarr;</span>
      </div>
    </Link>
  )
}
