import ProjectCard from '../../components/ProjectCard/ProjectCard';
import projects from '../../data/projects';
import './Projects.css';

function Projects() {
  return (
    <section className="section projects-page">
      <div className="container">
        <span className="eyebrow">What we do</span>
        <h1 className="underline-accent">Our Projects</h1>
        <p className="projects-page__lead">
          Every Y4C Bamenda project starts the same way: with young people showing up. From
          classrooms to elderly homes to tree-planting sites, here's where our members put the
          mission into practice.
        </p>

        <div className="project-grid">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
