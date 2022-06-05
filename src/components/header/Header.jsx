import React from 'react'
import '../../index.css'
import './Header.css';
import CTA from './CTA'
import ME from '../../assets/me3.png'
import HeaderSocials from './HeaderSocials';
import {BsArrowRight} from 'react-icons/bs'
import {ImSun} from 'react-icons/im'  //<----These icons are to switch between dark and light mode.
import {FaRegMoon} from 'react-icons/fa'


const Header = (props) => {
  return (
    <header>
      <div className="container header__container">
        <button onClick={props.themeSwitch} className='btn-primary theme-mode'><ImSun className='theme-icon'/> <FaRegMoon className='theme-icon' /></button>
        <h4>HI THERE 👋 I'M</h4>
        <h1>Edwin Roldan</h1>
        <h4 className="text-title">Software Developer</h4>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down <BsArrowRight /></a>
      </div>

    </header>
  )
}

export default Header