import React from "react";
import "../App.css";
import starBg from "../assets/image-from-rawpixel-id-4218299-png.png";
import heartMail from "../assets/heart-mail.png";
import kittenTulips from "../assets/kitten-tulips.png";
import kittyPhone from "../assets/kitty-phone.png";
import myPhoto from "../assets/images/maram4.jpg";
import laceEdge from "../assets/lace/contact-lace.png";
import oldBg from "../assets/images/bryan-goff-f7YQo-eYHdM-unsplash.jpg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const contactMethods = [
    {
      icon: FaEnvelope,
      label: 'Email',
      link: 'mailto:maram.hadjali@enicar.ucar.tn',
      color: '#ff6b6b'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      link: 'https://github.com/MaramHadjAli',
      color: '#ffffff'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com',
      color: '#0077b5'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <motion.div 
      className="contact-page" 
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div
        className="background-layer original-bg"
        style={{ backgroundImage: `url(${oldBg})` }}
      ></div>
      <div
        className="background-layer starry-bg"
        style={{ backgroundImage: `url(${starBg})`, opacity: 0.6 }}
      ></div>

      <div className="contact-container">
        <div className="contact-lace" aria-hidden="true">
          <img src={laceEdge} alt="" />
        </div>
        <figure className="contact-photo">
          <img src={myPhoto} alt="My portrait" />
          <figcaption>hi, that's me</figcaption>
        </figure>

        <div className="contact-content">
          <h1>
            <img src={heartMail} alt="" className="inline-star" />
            Feel free to reach out for collaborations, ideas, or just to say hi
            <img src={kittenTulips} alt="" className="inline-planet inline-kitten" />
          </h1>

          <motion.div 
            className="contact-icons-main"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {contactMethods.map((method, idx) => {
              const Icon = method.icon;
              return (
                <motion.a 
                  key={idx}
                  href={method.link}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-wrapper"
                  variants={itemVariants}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div 
                    className="icon main-contact-icon"
                    style={{ color: method.color }}
                    title={method.label}
                  >
                    <Icon size={32} />
                  </div>
                  <span className="icon-label">{method.label}</span>
                </motion.a>
              );
            })}
          </motion.div>

          <form className="contact-form">
            <label className="contact-field">
              <input type="text" name="name" placeholder=" " required />
              <span>Your Name</span>
            </label>
            <label className="contact-field">
              <input type="email" name="email" placeholder=" " required />
              <span>Your Email</span>
            </label>
            <label className="contact-field">
              <textarea name="message" placeholder=" " rows="5" required></textarea>
              <span>Your Message</span>
            </label>
            <motion.button 
              type="submit" 
              className="send-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send <img src={kittyPhone} alt="" className="inline-planet inline-planet--btn" />
            </motion.button>
          </form>
        </div>

      </div>
    </motion.div>
  );
};

export default Contact;
