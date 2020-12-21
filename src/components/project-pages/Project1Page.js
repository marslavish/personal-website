import React from "react";
import Buttons from "./Buttons";
import ShoppingCartGif from "../../assets/project-gif/shopping-cart.gif";

export const ProjectResources = ({ sourceAddr }) => {
  return (
    <div>
      <p className="project-page__heading heading-h5">Resources</p>
      <ul className="project-page__list">
        <li className="project-page__list-item paragraphs">
          Access the source code on{" "}
          <a
            className="project-page__link paragraphs"
            href={sourceAddr}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
        </li>
      </ul>
    </div>
  );
};

export default function Project1Page() {
  return (
    <div className="project-page-container">
      <p className="project-page__heading project-name heading-h5">
        Shopping Cart
      </p>
      <img
        className="project-page__img"
        src={ShoppingCartGif}
        alt="Shopping Cart"
      />

      {/* ABOUT */}
      <p className="project-page__heading heading-h5">About This Project</p>
      <p className="project-page__para paragraphs">
        This project is created with <code>create-react-app</code>. Routing is
        done by using <code>react-router-dom</code>. This is my first time using
        React Router in a project so I gained quite a bit of experience. Users
        can switch between three pages, on shop page, users can select and add
        items to the shopping cart. The number of items can either be adjusted
        by buttons or users’ input. All C.R.U.D actions can be performed on the
        shop and cart page. (Create, Read, Update, Delete).
      </p>
      <p className="project-page__para paragraphs">
        In the future, I’d like to add "checkout" feature and use API call to
        fetch real shopping items data.
      </p>
      <p className="project-page__para paragraphs">
        The most challenging part of this project is maintaining the state when
        switching between pages. This is done by storing data in Local Storage.
        In the future I’d like to try other state management libraries like
        Redux, or a more lightweight option, <code>useContext</code> hook.
      </p>

      {/* TECHNICAL SHEET */}
      <p className="project-page__heading heading-h5">Technical Sheet</p>
      <ul className="project-page__list">
        <li className="project-page__list-item paragraphs">
          UI/UX Architecture
        </li>
        <li className="project-page__list-item paragraphs">UI/UX Design</li>
        <li className="project-page__list-item paragraphs">React</li>
        <li className="project-page__list-item paragraphs">React Router</li>
        <li className="project-page__list-item paragraphs">JavaScript ES6</li>
        <li className="project-page__list-item paragraphs">
          CSS3 - Sass, Flexbox
        </li>
        <li className="project-page__list-item paragraphs">HTML5 – semantic</li>
      </ul>

      {/* RESOURCES */}
      <ProjectResources sourceAddr="https://github.com/marslavish/shopping-cart" />

      <Buttons
        liveLink="https://marslavish.github.io/shopping-cart/"
        prevProject=""
        nextProject="project2"
        prevBtnDisabled={true}
        nextBtnDisabled={false}
      />
    </div>
  );
}
