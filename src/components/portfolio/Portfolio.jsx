import React from "react";
import {FaGithubSquare} from 'react-icons/fa';
import {FiExternalLink} from 'react-icons/fi';
import DisneyImage from '../../assets/disney.png';
import BuildImage from '../../assets/letsbuild.png';
import Decrypton from '../../assets/decrypton.png';
import GymApp from '../../assets//gymapp.png';
import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="project-content">
          <p>Portfolio</p>
          <h3>Each project is a unique piece of development 🧩</h3>
          <div className="projects-grid">
            <div className="pro pro__1">
              <div className="pro__img">
                <img
                  src={GymApp}
                />
              </div>
              <div className="pro__text">
                <h3>EVERYDAY GYM</h3>
                <p>
                A gym website is a comprehensive resource for fitness information, Different exercise with gif, and exercise related youtube video
                to help users achieve their fitness goals.
                </p>
                <div className="stack">
                  <p>React</p>
                  <p>MATERIAL UI</p>
                </div>
                <div className="links">
                  <a target="_blank" href="https://github.com/jeminkukadiya09/everyday_gym" rel="noreferrer">
                    Code
                    <FaGithubSquare size={25} />
                    {/* <i className="fa-brands fa-github"></i> */}
                  </a>
                  <a target="_blank" href="https://everydaygym.netlify.app/" rel="noreferrer">
                    Live Demo
                    <FiExternalLink size={25} />
                    {/* <i className="fa-solid fa-arrow-up-right-from-square link-icon"></i> */}
                  </a>
                </div>
              </div>
            </div>

            <div className="pro pro__1 reversed-proj">
              <div className="pro__img">
                <img
                  src={BuildImage}
                />
              </div>
              <div className="pro__text">
                <h3>Lets Build</h3>
                <p>
                  A Let's Build website is an Scalable platform for contractor & self-worker. Where contractor and self-worker can collenct and work together
                  for better product.it is Light, Fast and Responsive.
                </p>
                <div className="stack">
                  <p>React</p>
                  <p>SCSS</p>
                </div>
                <div className="links">
                  <a target="_blank" href="https://github.com/jeminkukadiya09/let-s-build/tree/jemin_dev" rel="noreferrer">
                    Code
                    <FaGithubSquare size={25} />
                    {/* <i className="fa-brands fa-github"></i> */}
                  </a>
                  <a target="_blank" href="https://buildwebapp.netlify.app/" rel="noreferrer">
                    Live Demo
                    <FiExternalLink size={25} />
                    {/* <i className="fa-solid fa-arrow-up-right-from-square link-icon"></i> */}
                  </a>
                </div>
              </div>
            </div>

            <div className="pro pro__1">
              <div className="pro__img">
                <img
                  src={DisneyImage}
                />
              </div>
              <div className="pro__text">
                <h3>Disney Clone</h3>
                <p>
                  A Disney clone website is an Disney Hostar Clone that allows users
                  to Surf various movie by category wise. The website
                  provides an Login using Google Firabase.
                </p>
                <div className="stack">
                  <p>React</p>
                  <p>CSS</p>
                </div>
                <div className="links">
                  <a target="_blank" href="https://github.com/jeminkukadiya09/Disney-clone/tree/jemin_dev" rel="noreferrer">
                    Code
                    <FaGithubSquare size={25} />
                    {/* <i className="fa-brands fa-github"></i> */}
                  </a>
                  <a target="_blank" href="https://disneyplus-clone-cc688.web.app/home" rel="noreferrer">
                    Live Demo
                    <FiExternalLink size={25} />
                    {/* <i className="fa-solid fa-arrow-up-right-from-square link-icon"></i> */}
                  </a>
                </div>
              </div>
            </div>

            <div className="pro pro__1 reversed-proj">
              <div className="pro__img">
                <img
                  src={Decrypton}
                />
              </div>
              <div className="pro__text">
                <h3>Decrtptor</h3>
                <p>
                Decrtptor is a crypto app that allows users to search for information about various cryptocurrencies in real-time.
                </p>
                <div className="stack">
                  <p>React</p>
                  <p>SCSS</p>
                </div>
                <div className="links">
                  <a target="_blank" href="https://github.com/jeminkukadiya09/Decrtptor/tree/jemin_dev" rel="noreferrer">
                    Code
                    <FaGithubSquare size={25} />
                    {/* <i className="fa-brands fa-github"></i> */}
                  </a>
                  <a target="_blank" href="https://decryptor-crypto.netlify.app/" rel="noreferrer">
                    Live Demo
                    <FiExternalLink size={25} />
                    {/* <i className="fa-solid fa-arrow-up-right-from-square link-icon"></i> */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
