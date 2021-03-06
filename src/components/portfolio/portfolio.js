import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Navbar from "../../containers/navbar";
import Home from "../home";
import AboutMe from "../about-me";
import TechnicalKnowledge from "../technical-knowledge";
import WorkExperience from "../../components/work-experience";
import ContactMe from "../contact-me";

const Portfolio = () => {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <AboutMe />
      <TechnicalKnowledge />
      <WorkExperience />
      <ContactMe />
    </Fragment>
  );
};

export default Portfolio;
