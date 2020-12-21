import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const NavLinkItem = ({ url, onClick, name }) => {
  return (
    <li className="nav-item">
      <NavLink
        to={url}
        exact
        className="navlink navlink-sidebar"
        activeClassName="navlink-active"
        onClick={onClick}
      >
        {name}
      </NavLink>
      <span className="nav-item__cover"></span>
    </li>
  );
};

export default function Nav() {
  const node = useRef();
  const icon = useRef();

  const [isOpen, setIsOpen] = useState(false);
  const [haveBorder, setHaveBorder] = useState(false);

  const onNavIconClick = () => setIsOpen(!isOpen);

  const onNavHomeClick = () => setHaveBorder(false);

  const onNavLinkClick = () => {
    setIsOpen(!isOpen);
    setHaveBorder(true);
  };

  const onNavHomeLinkClick = () => {
    setIsOpen(!isOpen);
    setHaveBorder(false);
  };

  const handleClick = (e) => {
    if (
      node.current.contains(e.target) ||
      e.target === icon.current ||
      e.target === icon.current.children[0] ||
      [...icon.current.children[0].children].includes(e.target)
    )
      return;
    // outside click
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div
      className={
        "nav" + (isOpen ? " opened" : "") + (haveBorder ? "" : " no-border")
      }
    >
      {/* HOME TITLE */}
      <div className="nav__home">
        <NavLink
          to="/"
          exact
          className="navlink navlink-home"
          onClick={onNavHomeClick}
        >
          Ryan Chang
        </NavLink>
        <div className="line"></div>
      </div>

      {/* NAV ICON */}
      <div
        className={"icon-container" + (isOpen ? " opened" : "")}
        onClick={onNavIconClick}
        ref={icon}
      >
        <div className="border">
          <div className="rec-top"></div>
          <div className="rec-middle"></div>
          <div className="rec-bottom"></div>
        </div>
      </div>

      {/* SIDEBAR */}
      <div className="side-bar" ref={node}>
        <ul className="nav-items">
          <NavLinkItem url="/" onClick={onNavHomeLinkClick} name="Home" />
          <NavLinkItem url="/about" onClick={onNavLinkClick} name="About" />
          <NavLinkItem
            url="/projects"
            onClick={onNavLinkClick}
            name="Projects"
          />
          <NavLinkItem url="/contact" onClick={onNavLinkClick} name="Contact" />
        </ul>
      </div>
    </div>
  );
}
