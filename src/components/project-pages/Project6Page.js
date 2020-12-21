import React from "react";
import Buttons from "./Buttons";
import TicTacToe from "../../assets/project-gif/tic-tac-toe.gif";
import { ProjectResources } from "./Project1Page";

export default function Project4Page() {
  return (
    <div className="project-page-container">
      <p className="project-page__heading project-name heading-h4">
        Tic Tac Toe
      </p>
      <img className="project-page__img" src={TicTacToe} alt="Tic Tac Toe" />

      {/* ABOUT */}
      <p className="project-page__heading heading-h5">About This Project</p>
      <p className="project-page__para paragraphs">
        Tic Tac Toe game can be played by two players or with computer. In the
        two player mode, each player can create their name, and start or restart
        the game, the game will announce the winner accordingly. In the computer
        mode, computer will automatically make its move which after player’s
        turn. In the future I’d like to add the mini-max algorithm to make
        computer unbeatable.
      </p>
      <p className="project-page__para paragraphs">
        This project is quite engaging because it relies heavily on logic which
        greatly leveled up my JS skill.
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
      <ProjectResources sourceAddr="https://github.com/marslavish/tic-tac-toe" />

      <Buttons
        liveLink="https://marslavish.github.io/tic-tac-toe/"
        prevProject="project5"
        nextProject=""
        prevBtnDisabled={false}
        nextBtnDisabled={true}
      />
    </div>
  );
}
