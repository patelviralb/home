import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Navbar from "../../containers/navbar";
import Home from "../home";
import AboutMe from "../about-me";
import TechnicalKnowledge from "../technical-knowledge";

const Portfolio = () => {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <AboutMe />
      <TechnicalKnowledge />
    </Fragment>
  );
};

export default Portfolio;
