import React from "react";
import Buttons from "./Buttons";
import WeatherAppGif from "../../assets/project-gif/weather-app.gif";
import { ProjectResources } from "./Project1Page";

export default function Project2Page() {
  return (
    <div className="project-page-container">
      <p className="project-page__heading project-name heading-h5">
        Weather App
      </p>
      <img
        className="project-page__img"
        src={WeatherAppGif}
        alt="Weather App"
      />

      {/* ABOUT */}
      <p className="project-page__heading heading-h5">About This Project</p>
      <p className="project-page__para paragraphs">
        Weather App allows users to enter a city name and receive current
        weather data using the{" "}
        <a
          className="project-page__link"
          href="https://openweathermap.org/api"
          target="_blank"
          rel="noreferrer"
        >
          OpenWeatherMap
        </a>{" "}
        API. All cities with the specified name are displayed, the background
        image is fetched using the{" "}
        <a
          className="project-page__link"
          href="https://unsplash.com/developers"
          target="_blank"
          rel="noreferrer"
        >
          Unsplash
        </a>{" "}
        API, and a temperature unit toggle is available to switch between
        Celsius and Fahrenheit. City weather information display are formatted
        with the help of CSS Grid.
      </p>
      <p className="project-page__para paragraphs">
        This is my first time using API, the overall experience was quite fun
        and I learned a lot about working with APIs. In the future I’d like to
        add a loading page before the fetching is done to make the page
        transition look more smooth.
      </p>

      {/* TECHNICAL SHEET */}
      <p className="project-page__heading heading-h5">Technical Sheet</p>
      <ul className="project-page__list">
        <li className="project-page__list-item paragraphs">
          UI/UX Architecture
        </li>
        <li className="project-page__list-item paragraphs">UI/UX Design</li>
        <li className="project-page__list-item paragraphs">Webpack</li>
        <li className="project-page__list-item paragraphs">npm</li>
        <li className="project-page__list-item paragraphs">JavaScript ES6</li>
        <li className="project-page__list-item paragraphs">
          CSS3 - Sass, Flexbox, CSS Grid
        </li>
        <li className="project-page__list-item paragraphs">HTML5 – semantic</li>
      </ul>

      {/* RESOURCES */}
      <ProjectResources sourceAddr="https://github.com/marslavish/weather-app" />

      <Buttons
        liveLink="https://marslavish.github.io/weather-app/"
        prevProject="project1"
        nextProject="project3"
        prevBtnDisabled={false}
        nextBtnDisabled={false}
      />
    </div>
  );
}
