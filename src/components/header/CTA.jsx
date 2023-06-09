import React from 'react';
import CV from '../../assets/resume.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} className="btn" target="_blank" rel="noreferrer">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary contact-btn">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
