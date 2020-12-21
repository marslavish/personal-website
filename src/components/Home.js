import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import AOS from "aos";

import { Project1, Project2, Project3, Project4 } from "./ProjectsList";

import HackerMindset from "../assets/hacker_mindset.svg";
import "../assets/blobz.css";
import "aos/dist/aos.css";

const pageVariants = {
  initial: {
    opacity: 0,
    y: "-3px",
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: 0,
  },
};

const pageTransition = {
  duration: 0.3,
  transition: "ease-in-out",
};

const BtnBackgroundSlide = ({ content, url }) => {
  return (
    <button className="btn-bg-slide">
      <Link to={url} className="link">
        <span className="btn-bg-slide__slider"></span>
        <span className="btn-bg-slide__text heading-h6">{content}</span>
      </Link>
    </button>
  );
};

export default function Home() {
  AOS.init({
    delay: 200,
    duration: 600,
    easing: "ease-out",
    once: false,
  });

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="home-container"
    >
      {/* INTRODUCTION */}
      <div className="intro-container">
        <div className="intro-content">
          <h1 className="heading-h3 intro-name">Ryan Chang,</h1>
          <h1 className="heading-h3 job-title">Web Developer</h1>
          <p className="paragraphs job-description">
            Hi, my name is Ryan Chang. I’m a Web Developer with a focus in Front
            End and I love to create beautiful performant products and websites
            with delightful User Experiences and User Interfaces. You can check
            out my work below.
          </p>
          <p className="scroll-down scroll-down-icon">
            <ScrollLink
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Scroll Down
              <span></span>
            </ScrollLink>
          </p>
        </div>

        {/* Blob & illustration */}
        <div className="portrait">
          <img className="portrait__coder" src={HackerMindset} alt="coder" />
          <div className="tk-blob one">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 747.2 726.7">
              <path d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4z"></path>
            </svg>
          </div>
          <div className="tk-blob two">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320.6 343.9">
              <path d="M275.9 63.1c30.7 37.3 50.9 84.2 43 126.9-7.9 42.7-44.1 81.2-93 112.1C177 332.9 115.2 356 70.9 337 26.5 317.9-.4 256.7 0 204.6c.4-52 28-95 59.7-132.5C91.4 34.5 127.1 2.3 165.5.1c38.5-2.2 79.7 25.7 110.4 63z"></path>
            </svg>
          </div>
        </div>

        <ul className="social-links">
          <li>
            <a
              className="link"
              href="https://github.com/marslavish"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              className="link"
              href="https://twitter.com/RyanUniqueye"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              className="link"
              href="https://www.instagram.com/lauvchan/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>

      {/* PROJECTS */}
      <div className="moving-title-container" id="projects">
        <span className="line line-scroll" data-aos="moving-line"></span>
        <span className="moving-title heading-h5" data-aos="moving-title">
          Projects
        </span>
      </div>
      <div className="projects-homepage">
        <Project1 url="/projects" />
        <Project2 url="/projects" />
        <Project3 url="/projects" />
        <Project4 url="/projects" />
      </div>
      <BtnBackgroundSlide content="View All Projects" url="/projects" />

      {/* CONTACT */}
      <p className="contact-msg heading-h4" data-aos="contact-msg">
        Let’s Build Something Together. <br />
        <span className="paragraphs">
          Feel free to reach out if you’re looking for a developer, have a
          question, or just want to connect.
        </span>
      </p>
      <button className="btn-bg-filled" id="contact">
        <Link to="/contact" className="link">
          <span className="heading-h6">Get in Touch</span>
        </Link>
      </button>
    </motion.div>
  );
}

export { pageVariants, pageTransition };
