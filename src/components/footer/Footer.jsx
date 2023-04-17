import React from 'react';
import {FaGithubSquare, FaLinkedin} from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
  return (
    <section id="footer" className="footer">
        <div className="container">
            <div className="portfolio-footer">
                <h3>Copyright © 2023. All rights are reserved</h3>
                <div className="footer-social">
                    <a aria-label='github' target='_blank' href="https://github.com/jeminkukadiya09" rel="noreferrer">
                        <FaGithubSquare  size={45} />
                        {/* <i className="fa-brands fa-linkedin"></i> */}
                    </a>
                    <a aria-label='linkdin' target='_blank' href="https://www.linkedin.com/in/jeminkukadiya/" rel="noreferrer">
                        <FaLinkedin size={45} />
                        {/* <i className="fa-brands fa-github"></i> */}
                    </a>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Footer