import React from 'react';
import {FaTwitter, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#root" className='footer__logo'>Mr. Rolbot</a>

      <ul className='permalinks'>
        <li><a href="#root">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://twitter.com/MrRolbot" target='_blank' rel="noreferrer" ><FaTwitter/></a>
        <a href="https://www.instagram.com/mrrolbot/" target='_blank' rel="noreferrer" ><FaInstagram/></a>
        <a href="https://www.linkedin.com/in/edwin-roldan-delgado-93b067b3/" target='_blank' rel="noreferrer" ><FaLinkedinIn/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Mr. Rolbot 2022</small>
      </div>
    </footer>
  )
}

export default Footer