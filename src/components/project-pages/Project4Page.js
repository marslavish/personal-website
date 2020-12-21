import React from "react";
import Buttons from "./Buttons";
import Calculator from "../../assets/project-gif/calculator.gif";
import { ProjectResources } from "./Project1Page";

export default function Project4Page() {
  return (
    <div className="project-page-container">
      <p className="project-page__heading project-name heading-h4">
        Calculator
      </p>
      <img className="project-page__img" src={Calculator} alt="Calculator" />

      {/* ABOUT */}
      <p className="project-page__heading heading-h5">About This Project</p>
      <p className="project-page__para paragraphs">
        Calculator works just like any other calculator but it’s limited to
        perform basic calculations. The numbers and all other buttons are styled
        using CSS Grid. The most challenging part is actually using the plain
        CSS to make the button and the pressing look real. I solved this with
        the clear understanding of Box Model which worked just like I expected.
      </p>
      <p className="project-page__para paragraphs">
        In the future I’d like to improve the calculation algorithm, enable more
        complex calculations, and make the display more flexible.
      </p>

      {/* TECHNICAL SHEET */}
      <p className="project-page__heading heading-h5">Technical Sheet</p>
      <ul className="project-page__list">
        <li className="project-page__list-item paragraphs">UI/UX Design</li>
        <li className="project-page__list-item paragraphs">JavaScript ES6</li>
        <li className="project-page__list-item paragraphs">CSS3 - CSS Grid</li>
        <li className="project-page__list-item paragraphs">HTML5 – semantic</li>
      </ul>

      {/* RESOURCES */}
      <ProjectResources sourceAddr="https://github.com/marslavish/calculator" />

      <Buttons
        liveLink="https://marslavish.github.io/calculator/"
        prevProject="project3"
        nextProject="project5"
        prevBtnDisabled={false}
        nextBtnDisabled={false}
      />
    </div>
  );
}
