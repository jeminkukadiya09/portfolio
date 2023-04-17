import React from "react";
import "./Hero.scss";
import "font-awesome/css/font-awesome.min.css";
import Waving from "../../assets/waving.png";
import Html from "../../assets/html.svg";
import ReactIcon from "../../assets/react.svg";
import Bootstrap from "../../assets/Bootstrap_logo.png";
import Scss from "../../assets/scss.svg";
import JavaScript from "../../assets/javascript.svg";
import MaterialUi from "../../assets/mui.png";
import Css from "../../assets/css.svg";
import {FaGithubSquare, FaLinkedin} from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="content">
          <div className="hero-main">
            <div className="hero-text">
              <h1>Front-End React Developer</h1>
              <img src={Waving} alt="waving" />
              <p>
                Hi, I'm Jemin Kukadiya. A passionate Front-end React Developer
                based in Surat, India. 📍
              </p>
              <span>
                <a
                  aria-label="github"
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/jeminkukadiya09"
                >
                  <FaGithubSquare  size={30} />
                </a>
                <a
                  aria-label="linkdin"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/jeminkukadiya/"
                >
                  <FaLinkedin size={30} />
                  {/* <i className="fa-brands fa-github" /> */}
                </a>
              </span>
            </div>
            <div className="hero-img"></div>
          </div>
          <div className="skill">
            <p>Tech Stack</p>
            <div className="logos">
              <ul>
                <li>
                  <img src={Html} title="Html" alt="html_img" />
                </li>
                <li>
                  <img src={Css} title="CSS" alt="css_img" />
                </li>
                <li>
                  <img
                    src={JavaScript}
                    title="Javascript"
                    alt="javascript_img"
                  />
                </li>
                <li>
                  <img src={ReactIcon} title="React js" alt="reactjs_img" />
                </li>
                <li>
                  <img src={MaterialUi} title="Materialui" alt="material_img" />
                </li>
                <li>
                  <img src={Scss} title="Scss" alt="scss_img" />
                </li>
                <li>
                  <img src={Bootstrap} title="Bootstrap" alt="tailwand_img" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
