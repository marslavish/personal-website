import React from "react";
import Buttons from "./Buttons";
import CVApplicationGif from "../../assets/project-gif/cv-application.gif";
import { ProjectResources } from "./Project1Page";

export default function Project3Page() {
  return (
    <div className="project-page-container">
      <p className="project-page__heading project-name heading-h4">
        CV Application
      </p>
      <img
        className="project-page__img"
        src={CVApplicationGif}
        alt="CV Application"
      />

      {/* ABOUT */}
      <p className="project-page__heading heading-h5">About This Project</p>
      <p className="project-page__para paragraphs">
        CV Application allows users to create their resume while being
        automatically formatted. There’re generally four sections, users can
        input all the relevant information about their work experience. All
        C.R.U.D actions can be performed on all four sections. (Create, Read,
        Update, Delete). Dates can also be specified and displayed.
      </p>
      <p className="project-page__para paragraphs">
        This project heavily used states and props which greatly improved my
        React skills. In the future I’d like to add an export button which can
        allow users to download their CV into their computers.
      </p>

      {/* TECHNICAL SHEET */}
      <p className="project-page__heading heading-h5">Technical Sheet</p>
      <ul className="project-page__list">
        <li className="project-page__list-item paragraphs">
          UI/UX Architecture
        </li>
        <li className="project-page__list-item paragraphs">UI/UX Design</li>
        <li className="project-page__list-item paragraphs">React</li>
        <li className="project-page__list-item paragraphs">Bootstrap</li>
        <li className="project-page__list-item paragraphs">JavaScript ES6</li>
        <li className="project-page__list-item paragraphs">CSS3 - Sass</li>
        <li className="project-page__list-item paragraphs">HTML5 – semantic</li>
      </ul>

      {/* RESOURCES */}
      <ProjectResources sourceAddr="https://github.com/marslavish/cv-project" />

      <Buttons
        liveLink="https://marslavish.github.io/cv-project/"
        prevProject="project2"
        nextProject="project4"
        prevBtnDisabled={false}
        nextBtnDisabled={false}
      />
    </div>
  );
}
