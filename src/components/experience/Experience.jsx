import React from 'react';
import './Experience.css';
import { ImHtmlFive, ImCss3 } from 'react-icons/im';
import {
  SiAntdesign,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiMongodb,
  SiPostgresql,
  SiSpring,
  SiMicrosoftazure,
} from 'react-icons/si';
import { FaNodeJs, FaJava } from 'react-icons/fa';

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <ImHtmlFive className="experience__details-icon " />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="experience__details">
              <ImCss3 className="experience__details-icon " />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiJavascript className="experience__details-icon " />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiReact className="experience__details-icon " />
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiAntdesign className="experience__details-icon " />
              <div>
                <h4>Ant Design</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiBootstrap className="experience__details-icon " />
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>
          </div>
        </div>
        {/* end of frontend */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaNodeJs className="experience__details-icon " />
              <div>
                <h4>NodeJS</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiMongodb className="experience__details-icon " />
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiPostgresql className="experience__details-icon " />
              <div>
                <h4>PostgreSQL</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiSpring className="experience__details-icon " />
              <div>
                <h4>Spring Boot</h4>
              </div>
            </article>
            <article className="experience__details">
              <FaJava className="experience__details-icon " />
              <div>
                <h4>Java</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiMicrosoftazure className="experience__details-icon " />
              <div>
                <h4>Azure</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
