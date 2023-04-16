import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaCodepen } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/edwin-roldan-delgado-93b067b3/"
        target="_blank"
        rel="noreferrer"
        aria-label="linkedin button"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/MrRolbot23"
        target="_blank"
        rel="noreferrer"
        aria-label="github button"
      >
        <BsGithub />
      </a>
      <a
        href="https://codepen.io/mrrolbot"
        target="_blank"
        rel="noreferrer"
        aria-label="codepen button"
      >
        <FaCodepen />
      </a>
    </div>
  );
};

export default HeaderSocials;
