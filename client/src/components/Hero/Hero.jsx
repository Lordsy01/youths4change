import { Link } from 'react-router-dom';
import PlaceholderImage from '../PlaceholderImage/PlaceholderImage';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="eyebrow">Youths4Change — Bamenda Branch</span>
          <h1 className="hero__title">
            Small actions.<br />
            <span className="underline-accent">Big impact.</span>
          </h1>
          <p className="hero__lead">
            We're a youth-led movement in Bamenda turning empathy into action —
            through school campaigns, mentorship, environmental work, and hands-on
            care for the people our communities can overlook.
          </p>
          <div className="hero__actions">
            <Link to="/get-involved" className="btn btn--primary">Join the movement</Link>
            <Link to="/projects" className="btn btn--outline">See our projects</Link>
          </div>
        </div>

        <div className="hero__gallery">
          <PlaceholderImage label="EmpowerHer" className="hero__img hero__img--1" ratio="3 / 4" />
          <PlaceholderImage label="Back-to-School Campaign" className="hero__img hero__img--2" ratio="1 / 1" />
          <PlaceholderImage label="GreenFuture tree planting" className="hero__img hero__img--3" ratio="4 / 3" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
