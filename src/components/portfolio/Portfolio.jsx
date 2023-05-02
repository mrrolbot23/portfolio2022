import React from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/portfolio1.webp';
import IMG2 from '../../assets/portfolio2.webp';
import IMG3 from '../../assets/face-detection.webp';
import IMG4 from '../../assets/crypto-tracker.webp';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Face Detection App</h3>
          <p>
            This Application was built with REACT, Node.js, Express, and
            Postgres. Implemented <strong>Clarifai</strong> API to detect faces
            Currently hosted on <strong>Render</strong>.
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/mrrolbot23/face-recognition"
              className="btn"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://face-recognition-app-nz3w.onrender.com/"
              className="btn btn-primary"
              rel="noreferrer"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Cryptocurrency Tracker</h3>
          <p>
            Built with REACT, NodeJS, Express, and the CoinGecko API. Easily
            track your favorite coin's price, trending coins, and exchanges.
            Currently Hosted on{' '}
            <span className="highlight-bold">
              <strong>Render</strong>
            </span>
            .
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/MrRolbot23/crypto-tracker"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://coin-tracker-0e2n.onrender.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Student Management App</h3>
          <p>
            The frontend was built with REACT, Ant Design, and NodeJS. Backend
            was build with Spring Boot, Maven, and PostgreSQL. Packaged with
            Docker into a single image. Deployed on
            <span className="highlight-bold">
              <strong> AWS</strong>
            </span>{' '}
            through Github Actions following CICD principals.
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/MrRolbot/student-app-springboot-react"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="http://studentappspringbootreact-env.eba-tfkg7y2b.us-west-2.elasticbeanstalk.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Newsletter Signup</h3>
          <p>
            This application was built with HTML, CSS, Bootsrap, NodeJS, and the
            MailChimp API. It can easily be implemented on any site. Deployed on{' '}
            <span className="highlight-bold">
              <strong>Render </strong>
            </span>
            utilizing Git.
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/MrRolbot23/newsletter-signup"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://newsletter-signup-4jn9.onrender.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
