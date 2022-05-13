import React from 'react';
import './Navbar.css';
import {BiHomeAlt, BiUser} from 'react-icons/bi'
import {GiSkills} from 'react-icons/gi'
import {IoMdGitNetwork} from 'react-icons/io'
import {TiMessages} from 'react-icons/ti'
import { useState } from 'react';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#root" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
        <BiHomeAlt/>
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiSkills/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><IoMdGitNetwork/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TiMessages/></a>
    </nav>
  )
}

export default Navbar