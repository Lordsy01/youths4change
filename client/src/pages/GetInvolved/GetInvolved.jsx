import VolunteerForm from '../../components/VolunteerForm/VolunteerForm';
import './GetInvolved.css';

const WAYS = [
  {
    title: 'Volunteer your time',
    text: 'Join us on the ground during project visits — orphanage and elderly home visits, tree planting, school campaigns, and more.',
  },
  {
    title: 'Mentor a young person',
    text: 'Share your career or life experience with a student through our Mentorship & Career Guidance programme.',
  },
  {
    title: 'Donate supplies or funds',
    text: 'Support EmpowerHer, Back-to-School, and our outreach projects with sanitary products, school supplies, or financial contributions.',
  },
  {
    title: 'Spread the word',
    text: "Follow us on social media and share our projects — sometimes the biggest impact starts with someone simply knowing we exist.",
  },
];

function GetInvolved() {
  return (
    <>
      <section className="section get-involved-hero">
        <div className="container">
          <span className="eyebrow">Be the Change</span>
          <h1 className="underline-accent">Get Involved</h1>
          <p className="get-involved-hero__lead">
            "Join us and be the change you wish to see." Whatever time, skill, or resource you
            can offer, there's a role for you at Y4C Bamenda.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container ways-grid">
          {WAYS.map((way) => (
            <div className="way-card" key={way.title}>
              <h3>{way.title}</h3>
              <p>{way.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container form-section">
          <div className="form-section__intro">
            <span className="eyebrow">Sign Up</span>
            <h2 className="underline-accent">Become a Member</h2>
            <p>
              Membership is open to anyone 13 or older who's passionate about giving back.
              Fill out the form and our team will reach out with next steps.
            </p>
          </div>
          <VolunteerForm />
        </div>
      </section>
    </>
  );
}

export default GetInvolved;
