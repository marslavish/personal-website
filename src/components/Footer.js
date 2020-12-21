import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <p className="footer__name">Ryan Chang - 2020</p>
      <div className="footer__social-links">
        <a
          href="https://github.com/marslavish"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://twitter.com/RyanUniqueye"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
        <a
          href="https://www.instagram.com/lauvchan/"
          className="link last-link"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
      </div>
    </div>
  );
}
