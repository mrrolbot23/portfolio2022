import React from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/pumptoshi 3D.png'
import IMG4 from '../../assets/crypto-tracker.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Student Management App</h3>
          <p>
            The frontend was built with REACT, Ant Design, and NodeJS. 
            The backend was build with Spring Boot, Maven, and PostgreSQL. Packaged 
            with Docker into a single image. The app was deployed on AWS through Github Actions
            following CICD principals.
          </p>
            <div className="portfolio__item-cta">
              <a href="https://github.com/MrRolbot/student-app-springboot-react" className='btn' target='_blank' rel="noreferrer" >Github</a>
              <a href="http://studentappspringbootreact-env.eba-tfkg7y2b.us-west-2.elasticbeanstalk.com/" className='btn btn-primary' target='_blank' rel="noreferrer" >Live Demo</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Cryptocurrency Tracker</h3>
          <p> 
            Built with REACT, NodeJS, Express, and the CoinGecko API. Easily track
            your favorite coin's price, trending coins, and exchanges.
          </p>
            <div className="portfolio__item-cta">
              <a href="https://github.com/MrRolbot/Crypto-React-App" className='btn' target='_blank' rel="noreferrer" >Github</a>
              <a href="https://cryptocurrency-react-app.herokuapp.com/" className='btn btn-primary' target='_blank' rel="noreferrer" >Live Demo</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Newsletter Signup</h3>
          <p>
            This application was built with
            HTML, CSS, Bootsrap, NodeJS, and the MailChimp API. It 
            can easily be implemented on any site. Deployed on Heroku 
            utilizing Git.
          </p>
            <div className="portfolio__item-cta">
              <a href="https://github.com/MrRolbot/Newsletter" className='btn' target='_blank' rel="noreferrer" >Github</a>
              <a href="https://vast-lowlands-53275.herokuapp.com/" className='btn btn-primary' target='_blank' rel="noreferrer" >Live Demo</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Pumptoshi Website (In Progress)</h3>
            <p>Cryptopreneur and Financial mentor. Built with REACT and NodeJS.</p>
            <div className="portfolio__item-cta">
              <a href="null" className='btn' rel="noreferrer" >Github</a>
              <a href="null" className='btn btn-primary'rel="noreferrer">Live Demo</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio