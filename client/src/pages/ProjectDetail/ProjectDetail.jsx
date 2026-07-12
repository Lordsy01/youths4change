import { useParams, Link, Navigate } from 'react-router-dom';
import PlaceholderImage from '../../components/PlaceholderImage/PlaceholderImage';
import Gallery from '../../components/Gallery/Gallery';
import projects from '../../data/projects';
import './ProjectDetail.css';

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/projects" replace />;

  const galleryItems = (project.images.length ? project.images : [null, null, null]).map((img, i) => ({
    src: img ? `/images/projects/${project.folder}/${img}` : null,
    label: `${project.title} photo ${i + 1}`,
  }));

  return (
    <>
      <section className="section project-detail-hero">
        <div className="container">
          <Link to="/projects" className="project-detail__back">← All Projects</Link>
          <span className="eyebrow">{project.tagline}</span>
          <h1>{project.title}</h1>
          <p className="project-detail-hero__desc">{project.description}</p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">In Pictures</span>
            <h2 className="underline-accent">{project.title} Gallery</h2>
          </div>
          <Gallery items={galleryItems} />
        </div>
      </section>

      <section className="section project-detail-cta">
        <div className="container project-detail-cta__inner">
          <PlaceholderImage label="Volunteers in action" ratio="16 / 9" />
          <div>
            <h2>Want to be part of this?</h2>
            <p>We're always looking for hands, hearts, and ideas for {project.title}.</p>
            <Link to="/get-involved" className="btn btn--primary">Join {project.title}</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectDetail;
