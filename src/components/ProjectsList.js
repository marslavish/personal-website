import React from "react";
import { Link } from "react-router-dom";

import ShoppingCartImg from "../assets/project-img/shopping-cart.png";
import WeatherAppImg from "../assets/project-img/weather-app.png";
import CvApplicationImg from "../assets/project-img/cv-application.png";
import CalculatorImg from "../assets/project-img/calculator.png";
import EtchASketchImg from "../assets/project-img/etch-a-sketch-shadow.png";
import TicTacToeImg from "../assets/project-img/tic-tac-toe-shadow.png";

const ProjectCover = ({ url, projectPath, projectName, imgAddr }) => {
  return (
    <div className="project-cover">
      <Link to={`${url}/${projectPath}`}>
        <div className="project-cover__slider">
          <div className="plus-sign"></div>
          <p className="project-cover__text heading-h6">{projectName}</p>
        </div>
      </Link>
      <img src={imgAddr} alt={projectName} className="project-cover__img" />
    </div>
  );
};

const Project1 = ({ url }) => {
  return (
    <ProjectCover
      url={url}
      projectPath="project1"
      projectName="Shopping Cart"
      imgAddr={ShoppingCartImg}
    />
  );
};

const Project2 = ({ url }) => {
  return (
    <ProjectCover
      url={url}
      projectPath="project2"
      projectName="Weather App"
      imgAddr={WeatherAppImg}
    />
  );
};

const Project3 = ({ url }) => {
  return (
    <ProjectCover
      url={url}
      projectPath="project3"
      projectName="CV Application"
      imgAddr={CvApplicationImg}
    />
  );
};

const Project4 = ({ url }) => {
  return (
    <ProjectCover
      url={url}
      projectPath="project4"
      projectName="Calculator"
      imgAddr={CalculatorImg}
    />
  );
};

const Project5 = ({ url }) => {
  return (
    <ProjectCover
      url={url}
      projectPath="project5"
      projectName="Etch A Sketch"
      imgAddr={EtchASketchImg}
    />
  );
};

const Project6 = ({ url }) => {
  return (
    <ProjectCover
      url={url}
      projectPath="project6"
      projectName="Tic Tac Toe"
      imgAddr={TicTacToeImg}
    />
  );
};

export default function ProjectsList({ url }) {
  return (
    <div className="project-list-container">
      <div className="title-container">
        <span className="title-line"></span>
        <span className="title-text heading-h4">Projects</span>
      </div>
      <div className="projects">
        <Project1 url={url} />
        <Project2 url={url} />
        <Project3 url={url} />
        <Project4 url={url} />
        <Project5 url={url} />
        <Project6 url={url} />
      </div>
    </div>
  );
}

export { Project1, Project2, Project3, Project4 };
