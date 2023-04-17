import React from 'react';
import AboutImg from "../../assets/about-img.webp";
import WorkingImogi from "../../assets/working-emoji.png";
import Text2 from "../../assets/text2.svg";
import  './About.scss';


const About = () => {
  return (
    <section id="about" className="about">
        <div className="container">
            <div className="about-content">
                <div className="img-slide">
                    <img src={WorkingImogi} alt="emoji" className="work-emoji" />
                    <img src={AboutImg} alt='about' className='img-side__main-img'/>
                    <span>
                        <img src={Text2} alt='text2' className='text2' />
                    </span>
                </div>
                <div className="text-side">
                    <h4>About Me</h4>
                    <h3>A dedicated Front-end Developer <br  /> based in Surat, India 📍</h3>
                    <p>
                        As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, 
                        JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that 
                        offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through 
                        writing clean and optimized code and utilizing cutting-edge development tools and techniques. 
                        I am also a team player who thrives in collaborating with cross-functional teams to produce 
                        outstanding web applications.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About