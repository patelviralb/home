import React, { useState } from "react";

import Navlink from "./navlink";

const Navbar = () => {
  const navbarLinks = [
    {
      name: "Home",
      link: "#vp-home",
    },
    {
      name: "About",
      link: "#vp-about-me",
    },
    {
      name: "Technical Knowledge",
      link: "#vp-my-technical-knowledge",
    },
    {
      name: "Work Experience",
      link: "#vp-my-work-experience",
    },
    /* {
      name: "Education",
      link: "#vp-my-education",
    },
    {
      name: "Testimonies",
      link: "#vp-my-testimonies",
    },
    {
      name: "Projects",
      link: "#vp-my-projects",
    }, */
    {
      name: "Contact Me",
      link: "#vp-contact-me",
    },
    /* {
      name: "Profiles",
      link: "#vp-my-social-profiles",
    }, */
  ];

  const [bgColor, setBgColor] = useState("");

  React.useEffect(() => {
    const listenScrollEvent = () => {
      HandleNavbarColorChangeEvents();
    };

    const listenResizeEvent = () => {
      HandleNavbarColorChangeEvents();
    };

    const HandleNavbarColorChangeEvents = () => {
      const navbarExpansionButton = document.getElementById(
        "vp-navbar-expand-button"
      );
      const navbarButtonVisibility = window.getComputedStyle(
        navbarExpansionButton
      ).display;

      if (window.pageYOffset > 500 || navbarButtonVisibility !== "none") {
        setBgColor("bg-primary");
      } else {
        setBgColor("");
      }
    };

    window.addEventListener("scroll", listenScrollEvent);
    window.addEventListener("resize", listenResizeEvent);
    HandleNavbarColorChangeEvents();

    return () => {
      window.removeEventListener("scroll");
      window.removeEventListener("resize");
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-primary fixed-top ${bgColor}`}
    >
      <button
        id="vp-navbar-expand-button"
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
      >
        <i id="vp-navbar-button-icon" className="fas fa-bars text-white" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          {navbarLinks.map((section, index) => {
            return (
              <Navlink key={index} name={section.name} href={section.link} />
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
