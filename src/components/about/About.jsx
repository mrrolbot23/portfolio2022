import React from 'react'
import './About.css'
import ME from '../../assets/me-about.png'
import {FiAward} from 'react-icons/fi'
import {HiChatAlt2} from 'react-icons/hi'
import {BiGitRepoForked} from 'react-icons/bi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me image"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FiAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1 Year Development</small>
            </article>

            <article className='about__card'>
              <BiGitRepoForked className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>

            <article className='about__card'>
              <HiChatAlt2 className='about__icon'/>
              <h5>Bilengual</h5>
              <small>Spanish & English</small>
            </article>
          </div>
          <p>
              I'm a Systems Engineer in the U.S. Army that found a new passion for Software and 
              Web Development a little over year ago. Experienced with multiple Frontend and Backend technologies.
              As a self-taught developer, I'm always on "Learning Mode". It gives me the ability to quickly adapt 
              to changes and unexpected situations. Love sharing knowledge and experiences to make the team better.
              Also, I know how to close Vim 😬. I look forward to working with you!
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About