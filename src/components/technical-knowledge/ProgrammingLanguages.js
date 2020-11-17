import React, { Fragment } from "react";

import Languages from "./languages";
import { SectionSubHeadingH4, CenterAlignedContainer } from "../styles/common";

const ProgrammingLanguages = () => {
  return (
    <Fragment>
      <div className="row mt-4">
        <CenterAlignedContainer className="col-md-10 offset-md-1 col-12">
          <SectionSubHeadingH4>Programming Languages</SectionSubHeadingH4>
        </CenterAlignedContainer>
      </div>
      <div className="row mt-4">
        <CenterAlignedContainer className="col-md-10 offset-md-1 col-12">
          <Languages />
        </CenterAlignedContainer>
      </div>
    </Fragment>
  );
};

export default ProgrammingLanguages;
