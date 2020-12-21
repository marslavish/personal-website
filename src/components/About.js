import React from "react";
import { motion } from "framer-motion";

import { pageVariants, pageTransition } from "./Home";
import "react-awesome-button/dist/styles.css";

export default function About() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="about-me-page"
    >
      <div className="title-container">
        <span className="title-line"></span>
        <span className="title-text heading-h5">About Me</span>
      </div>

      <p className="about-me__text paragraphs">
        My web development journey starts right after graduation from college. I
        didn’t quite like my major in college, but I found my passion in
        programming so I have dedicated myself to learning it ever since.{" "}
      </p>
      <p className="about-me__text paragraphs">
        I learned most of my web development skills through The Odin Project. It
        is a free open source coding curriculum and is maintained and improved
        by a team of contributors which aims to help it constantly update to the
        demands of the industry. I began on their foundation course working my
        way through lessons on HTML and CSS, these are interspersed with
        projects, all of which rather than holding your hand throughout are very
        much self driven. They believe that building projects and actually being
        hands on is the best way to learn, it forces you to solve any problems
        by breaking them down into more manageable sections before moving on.
      </p>
      <p className="about-me__text paragraphs">
        I have thoroughly enjoyed the challenge of working through each project,
        seeing the knowledge I have been taught in each lesson come to use. I
        have on average spent 5-8 hrs per day working through the course
        supplemented with learning from various online tutorials.
      </p>
      <p className="about-me__text paragraphs last-para">
        When I’m not coding I enjoy lifting weights, reading books and helping
        other people with their web development problems.
      </p>
      <img
        className="about-me__img"
        src="https://portfolio.smakosh.com/static/skills-ac8dbafdf432c18a6e4d62a715e84ac3.svg"
        alt="About Me"
      />
    </motion.div>
  );
}
