import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import SlogansBanner from '../../components/SlogansBanner/SlogansBanner';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import PlaceholderImage from '../../components/PlaceholderImage/PlaceholderImage';
import projects from '../../data/projects';
import './Home.css';

function Home() {
  return (
    <>
      <Hero />
      <SlogansBanner />

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">What we stand for</span>
            <h2 className="underline-accent">Vision &amp; Mission</h2>
          </div>
          <div className="vm-grid">
            <div className="vm-card">
              <h3>Our Vision</h3>
              <p>Empowering individuals to create a positive impact and drive meaningful change in their communities.</p>
            </div>
            <div className="vm-card">
              <h3>Our Mission</h3>
              <p>To inspire, educate, and mobilize individuals towards actively participating in social change initiatives, fostering a culture of empathy, equality, and sustainable development.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Our Work in Bamenda</span>
            <h2 className="underline-accent">Projects making a difference</h2>
          </div>
          <div className="project-grid">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section founder-section">
        <div className="container founder-section__inner">
          <PlaceholderImage label="Inares Kenne Tsangue, Founder & President" ratio="1 / 1" className="founder-section__img" />
          <div>
            <span className="eyebrow">From our Founder</span>
            <h2>Inares Kenne Tsangue</h2>
            <p className="founder-section__role">Founder &amp; President, Youths4Change Initiative</p>
            <p>
              "We believe young people have the passion, creativity, and drive to tackle the
              most pressing challenges of our time. Every visit, every workshop, every tree planted
              is proof that small actions add up to big impact."
            </p>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-section__inner">
          <h2>Your voice. Your impact. Your change.</h2>
          <p>Whether you can give an afternoon, a skill, or a small donation — there's a place for you at Y4C Bamenda.</p>
          <div className="cta-section__actions">
            <Link to="/get-involved" className="btn btn--primary">Get Involved</Link>
            <Link to="/contact" className="btn btn--outline btn--outline-light">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
