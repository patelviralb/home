import React, { Fragment } from "react";

import TechnologiesAndFramework from "./TechnologiesAndFramework";
import ProgrammingLanguages from "./ProgrammingLanguages";
import { SectionHeadingH1 } from "../styles/common";
import PageBreak from "../page-break";

const TechnicalKnowledge = () => {
  return (
    <Fragment>
      <div id="vp-my-technical-knowledge" />
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-12">
            <SectionHeadingH1>Technical Knowledge</SectionHeadingH1>
          </div>
        </div>

        <ProgrammingLanguages />

        <TechnologiesAndFramework />
      </div>
      <div className="mb-5" />
      <PageBreak />
    </Fragment>
  );
};

export default TechnicalKnowledge;
