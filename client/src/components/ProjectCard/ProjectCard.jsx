import { Link } from 'react-router-dom';
import PlaceholderImage from '../PlaceholderImage/PlaceholderImage';
import './ProjectCard.css';

function ProjectCard({ project }) {
  const cover = project.images[0]
    ? `/images/projects/${project.folder}/${project.images[0]}`
    : null;

  return (
    <Link to={`/projects/${project.slug}`} className="project-card">
      <PlaceholderImage src={cover} alt={project.title} label={project.title} ratio="4 / 3" />
      <div className="project-card__body">
        <h3>{project.title}</h3>
        <p className="project-card__tagline">{project.tagline}</p>
        <p className="project-card__summary">{project.summary}</p>
        <span className="project-card__link">Learn more →</span>
      </div>
    </Link>
  );
}

export default ProjectCard;
