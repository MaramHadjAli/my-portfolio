import React from "react";
import "../App.css";
import starBg from "../assets/image-from-rawpixel-id-4218299-png.png";
import starIcon from "../assets/image-from-rawpixel-id-6011383-png.png";
import myPhoto from "../assets/images/maram.jpg";
import oldBg from "../assets/images/bryan-goff-f7YQo-eYHdM-unsplash.jpg";
import { FaGithub, FaLinkedin, FaFacebook, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-page" id="contact">
      <div
        className="background-layer original-bg"
        style={{ backgroundImage: `url(${oldBg})` }}
      ></div>
      <div
        className="background-layer starry-bg"
        style={{ backgroundImage: `url(${starBg})`, opacity: 0.6 }}
      ></div>

      <div className="contact-container">
        <div className="contact-photo">
            <img src={myPhoto} alt="My portrait" />
            </div>


        <div className="contact-content">
          <h1>
            <img src={starIcon} alt="star" className="inline-star" />
            Feel free to reach out for collaborations, ideas, or just to say hi 🚀
          </h1>

          <div className="contact-icons">
            <a href="mailto:maram.hadjali@enicar.ucar.tn" className="icon gmail">
              <FaEnvelope />
            </a>
            <a href="tel:+21625638885" className="icon phone">
              <FaPhone />
            </a>
            <a
              href="https://github.com/MaramHadjAli"
              target="_blank"
              rel="noreferrer"
              className="icon github"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/maram-hadj-ali-927bb934b"
              target="_blank"
              rel="noreferrer"
              className="icon linkedin"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/maram.hadj.ali.376030"
              target="_blank"
              rel="noreferrer"
              className="icon facebook"
            >
              <FaFacebook />
            </a>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="send-btn">
              Send 🚀
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
