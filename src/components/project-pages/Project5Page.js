import React from "react";
import Buttons from "./Buttons";
import EtchASketch from "../../assets/project-gif/etch-a-sketch.gif";
import { ProjectResources } from "./Project1Page";

export default function Project4Page() {
  return (
    <div className="project-page-container">
      <p className="project-page__heading project-name heading-h4">
        Etch A Sketch
      </p>
      <img
        className="project-page__img"
        src={EtchASketch}
        alt="Etch A Sketch"
      />

      {/* ABOUT */}
      <p className="project-page__heading heading-h5">About This Project</p>
      <p className="project-page__para paragraphs">
        Etch-A-Sketch is an online sketch board which allows users to draw using
        the mouse as a pen with different colors to choose from. User can draw
        with plain normal black or random colors for each grid, or shades of
        gray which allows shades to be added on each hover. User can also reset
        the whole sketch board with specified number of squares on both sides.
      </p>
      <p className="project-page__para paragraphs">
        The most challenging part is manipulating CSS with JavaScript to control
        the color and so on. This is done by using CSS variables which works as
        expected.
      </p>
      <p className="project-page__para paragraphs">
        In the future I’d like to add a color picker which allow users to any
        color he may want, and add a save button to save the artwork.
      </p>

      {/* TECHNICAL SHEET */}
      <p className="project-page__heading heading-h5">Technical Sheet</p>
      <ul className="project-page__list">
        <li className="project-page__list-item paragraphs">UI/UX Design</li>
        <li className="project-page__list-item paragraphs">JavaScript ES6</li>
        <li className="project-page__list-item paragraphs">
          CSS3 - Flexbox, CSS Grid
        </li>
        <li className="project-page__list-item paragraphs">HTML5 – semantic</li>
      </ul>

      {/* RESOURCES */}
      <ProjectResources sourceAddr="https://github.com/marslavish/etch-a-sketch" />

      <Buttons
        liveLink="https://marslavish.github.io/etch-a-sketch/"
        prevProject="project4"
        nextProject="project6"
        prevBtnDisabled={false}
        nextBtnDisabled={false}
      />
    </div>
  );
}
