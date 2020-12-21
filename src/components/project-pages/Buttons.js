import React from "react";
import { Link } from "react-router-dom";

export default function Buttons(props) {
  const {
    liveLink,
    prevProject,
    nextProject,
    prevBtnDisabled,
    nextBtnDisabled,
  } = props;

  return (
    <div>
      <button className="btn-bg-filled btn-visit-website">
        <a className="link" href={liveLink} target="_blank" rel="noreferrer">
          <span className="heading-h6">Visit Website</span>
        </a>
      </button>

      <div className="switch-btn-container">
        <button
          className="btn-bg-slide btn-prev-project"
          disabled={prevBtnDisabled}
        >
          {prevBtnDisabled ? (
            <span className="heading-h6">Prev Project</span>
          ) : (
            <Link to={prevProject} className="link">
              <span className="btn-bg-slide__slider rtl"></span>
              <span className="btn-bg-slide__text heading-h6">
                Prev Project
              </span>
            </Link>
          )}
        </button>

        <Link to="/projects" className="link">
          <div
            className="btn-view-all-projects"
            title="Back to Project Page"
          ></div>
        </Link>

        <button
          className="btn-bg-slide btn-next-project"
          disabled={nextBtnDisabled}
        >
          {nextBtnDisabled ? (
            <span className="heading-h6">Next Project</span>
          ) : (
            <Link to={nextProject} className="link">
              <span className="btn-bg-slide__slider"></span>
              <span className="btn-bg-slide__text heading-h6">
                Next Project
              </span>
            </Link>
          )}
        </button>
      </div>
    </div>
  );
}
