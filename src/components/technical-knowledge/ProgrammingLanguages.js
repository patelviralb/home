import React, { Fragment } from "react";

import Languages from "./languages";
import {
  CenterAlignedContainer,
  TechnicalKnowledgeSubHeading,
} from "../styled/technical-knowledge";

const ProgrammingLanguages = () => {
  return (
    <Fragment>
      <div className="row mt-4">
        <CenterAlignedContainer className="col-md-10 offset-md-1 col-12">
          <TechnicalKnowledgeSubHeading>
            Programming Languages
          </TechnicalKnowledgeSubHeading>
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
