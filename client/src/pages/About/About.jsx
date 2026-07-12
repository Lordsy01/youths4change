import PlaceholderImage from '../../components/PlaceholderImage/PlaceholderImage';
import team from '../../data/team';
import { motto } from '../../data/slogans';
import './About.css';

function About() {
  return (
    <>
      <section className="section about-hero">
        <div className="container">
          <span className="eyebrow">About Us</span>
          <h1 className="underline-accent">Youths4Change, Bamenda Branch</h1>
          <p className="about-hero__lead">
            Youths4Change Initiative (Y4C) is a youth-led, non-profit, non-discriminatory
            organization founded in 2023 by Inares Kenne Tsangue, with branches across several
            African countries. Our Bamenda branch channels that same energy into the North-West
            Region of Cameroon — turning young people's passion into structured, lasting community impact.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container vm-block">
          <div className="vm-block__item">
            <span className="eyebrow">Vision</span>
            <p>Empowering individuals to create a positive impact and drive meaningful change in their communities.</p>
          </div>
          <div className="vm-block__item">
            <span className="eyebrow">Mission</span>
            <p>To inspire, educate, and mobilize individuals towards actively participating in social change initiatives, fostering a culture of empathy, equality, and sustainable development.</p>
          </div>
          <div className="vm-block__item">
            <span className="eyebrow">Motto</span>
            <p>{motto}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Our Voice</span>
            <h2 className="underline-accent">Slogans that guide us</h2>
          </div>
          <ul className="slogan-list">
            <li>"Together, we change the world."</li>
            <li>"Your voice. Your impact. Your change."</li>
            <li>"Join us and be the change you wish to see."</li>
            <li>"Uniting for a brighter future."</li>
            <li>"Hearts that love, hands that care."</li>
            <li>"We serve."</li>
          </ul>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Leadership</span>
            <h2 className="underline-accent">Meet our Founder</h2>
          </div>
          <div className="team-grid">
            {team.map((member) => (
              <div className="team-card" key={member.name}>
                <PlaceholderImage
                  src={member.photo ? `/images/team/${member.photo}` : null}
                  label={member.name}
                  ratio="1 / 1"
                />
                <h3>{member.name}</h3>
                <p className="team-card__role">{member.role}</p>
                <p>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Who Can Join</span>
            <h2 className="underline-accent">Membership</h2>
          </div>
          <p className="membership-intro">
            Membership is open to anyone passionate about giving back to the community and willing
            to embrace our vision and mission. To join Y4C Bamenda, you should:
          </p>
          <ul className="membership-list">
            <li>Be at least 13 years old.</li>
            <li>Be willing to contribute time, effort, and where possible, resources to the organization's growth.</li>
            <li>Demonstrate a commitment to working collaboratively as part of the team.</li>
            <li>Exhibit a strong passion for our mission and vision.</li>
            <li>Commit to participating in community development projects.</li>
            <li>Support the promotion of the Sustainable Development Goals (SDGs) and engage in leadership development programs.</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default About;
