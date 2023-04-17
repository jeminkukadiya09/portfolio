import React from "react";
import {FaLocationArrow} from 'react-icons/fa';
import {HiMail} from 'react-icons/hi';
import "./Contact.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__contect">
          <div className="contact__title">
            <p>Contact</p>
            <h3>Don't be shy! Hit me up! 👇</h3>
          </div>
          <div className="contact__icons">
            <div className="contact__icon-box">
              <span>
                <FaLocationArrow size={25} />
                {/* <i className="fa-solid fa-map-location-dot"></i> */}
              </span>
              <div className="contact__info">
                <h3>Location</h3>
                <p>Surat, India</p>
              </div>
            </div>

            <div className="contact__icon-box">
              <span>
                <HiMail size={25}/>
                {/* <i className="fa-solid fa-map-location-dot"></i> */}
              </span>
              <div className="contact__info">
                <h3>Mail</h3>
                <p>jeminkukadia@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
