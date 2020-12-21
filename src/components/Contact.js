import React from "react";
import { motion } from "framer-motion";
import { AwesomeButtonSocial } from "react-awesome-button";
import { pageVariants, pageTransition } from "./Home";

import "react-awesome-button/dist/styles.css";

export default function Contact() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="contact-page"
    >
      <div className="title-container contact">
        <span className="title-line"></span>
        <span className="title-text heading-h5">Get in Touch</span>
      </div>
      <p className="contact__para paragraphs">
        Feel free to reach out if you're looking for a developer, have a
        question, or just want to connect.
      </p>
      <a
        href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=uniqueye608@gmail.com&tf=1"
        target="_blank"
        rel="noreferrer"
        className="link email-addr"
      >
        uniqueye608@gmail.com
      </a>
      <p className="heading-h5 title-reach-me">Reach me on</p>
      <AwesomeButtonSocial
        type="github"
        href="https://github.com/marslavish"
        target="_blank"
        className="social-media-btn"
      ></AwesomeButtonSocial>
      <AwesomeButtonSocial
        type="twitter"
        href="https://twitter.com/RyanUniqueye"
        target="_blank"
        className="social-media-btn"
      ></AwesomeButtonSocial>
      <AwesomeButtonSocial
        type="instagram"
        href="https://www.instagram.com/lauvchan/"
        target="_blank"
        className="social-media-btn"
      ></AwesomeButtonSocial>
    </motion.div>
  );
}
