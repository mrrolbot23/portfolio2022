import React from 'react'
import './Header.css';
import CTA from './CTA'
import ME from '../../assets/me3.png'
import HeaderSocials from './HeaderSocials';
import {BsArrowRight} from 'react-icons/bs'
import '../../index.css'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>HI THERE 👋 I'M</h4>
        <h1>Edwin Roldan</h1>
        <h4 className="text-light">Software Developer</h4>
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