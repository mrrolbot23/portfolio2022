import React from 'react';
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import {FaCodepen} from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/edwin-roldan-delgado-93b067b3/" target="_blank" rel="noreferrer" ><BsLinkedin/></a>
        <a href="https://github.com/MrRolbot" target="_blank" rel="noreferrer" ><BsGithub/></a>
        <a href="https://codepen.io/mrrolbot" target="_blank" rel="noreferrer" ><FaCodepen/></a>
    </div>
  )
}

export default HeaderSocials