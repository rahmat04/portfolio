import React, { useState, useEffect, useRef } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { mainBody, repos, about, skills } from "../editable-stuff/config.js";
import { NavLink } from "./home/migration.jsx";

const Navigation = React.forwardRef((props, ref) => {
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions || !ref?.current) return;

      const refOffsetTop = ref.current.offsetTop;
      if (currPos.y + refOffsetTop - navbarDimensions.bottom > 5) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
      setScrollPosition(currPos.y);
    },
    [navBottom, navbarDimensions, ref]
  );

  useEffect(() => {
    if (!navbarDimensions || !ref?.current) return;

    const refOffsetTop = ref.current.offsetTop;
    if (navBottom - scrollPosition >= refOffsetTop) {
      setIsTop(false);
    } else {
      setIsTop(true);
    }
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  return (
    <Navbar
      ref={navbarMenuRef}
      className={`px-3 fixed-top ${!isTop ? "navbar-white" : "navbar-transparent"}`}
      expand="lg"
    >
      <Navbar.Brand className="navbar-brand" href={process.env.PUBLIC_URL + "/#home"}>
        {`<${mainBody.firstName} />`}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav mr-auto">
          {repos.show && (
            <NavLink href={process.env.PUBLIC_URL + "/#projects"}>
              Projects
            </NavLink>
          )}
          <NavLink
            className="nav-item lead"
            href={about.resume}
            target="_blank"
            rel="noreferrer noopener"
          >
            Resume
          </NavLink>
          {about.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#aboutme"}
            >
              About
            </NavLink>
          )}
          {skills.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#skills"}
            >
              Skills
            </NavLink>
          )}
          <NavLink
            className="nav-item lead"
            href={process.env.PUBLIC_URL + "/#domain"}
          >
            Domain
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
