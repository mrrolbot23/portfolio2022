import React from 'react';
import {FaCodepen, FaGithub, FaLinkedinIn} from 'react-icons/fa'
import LOGO from '../../assets/logo.png'
import '../../index.css'
import './Footer.css';

const date = new Date();
const currentYear = date.getFullYear();

const Footer = () => {
  return (
    <footer>
      <a href="#root" className='footer__logo'> <img src={LOGO} alt='logo'/></a>

      <ul className='permalinks'>
        <li><a href="#root">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/MrRolbot" target='_blank' rel="noreferrer" ><FaGithub/></a>
        <a href="https://codepen.io/mrrolbot" target='_blank' rel="noreferrer" ><FaCodepen/></a>
        <a href="https://www.linkedin.com/in/edwin-roldan-delgado-93b067b3/" target='_blank' rel="noreferrer" ><FaLinkedinIn/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Mr. Rolbot {currentYear}</small>
      </div>
    </footer>
  )
}

export default Footer