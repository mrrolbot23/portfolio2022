import React from "react";
import "./About.css";
import ME from "../../assets/me-about.webp";

const About = () => {
  return (
    <section id="about">
      <h5>Get know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <p>
            I'm a Software Developer and Systems Engineer in the U.S. Army.
            Experienced with multiple Frontend and Backend technologies. With a
            passion for learning and a commitment to excellence, I am excited to
            contribute to the ever-evolving world of technology. Always willing
            to adapt and provide support to my teammates to achieve common
            goals. I look forward to working with you!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
