import React, { Fragment, useState } from "react";

import "./work-experience-style.scss";
import { work_experience } from "./work-experience-json";
import WorkExperienceCard from "./work-experience-card";
import PageBreak from '../page-break';

const WorkExperience = () => {
  const [qbWorkExperience, setQbWorkExperience] = useState("SHOW");
  const [prolificsWorkExperience, setProlificsWorkExperience] = useState(
    "SHOW"
  );
  const [infosysTaWorkExperience, setInfosysTaWorkExperience] = useState(
    "SHOW"
  );
  const [infosysSseWorkExperience, setInfosysSseWorkExperience] = useState(
    "SHOW"
  );
  const [infosysSeWorkExperience, setInfosysSeWorkExperience] = useState(
    "SHOW"
  );

  const toggleStatus = (stateVariable, setStateVariableFunction) => {
    if (stateVariable === "SHOW") {
      setStateVariableFunction("HIDE");
    } else {
      setStateVariableFunction("SHOW");
    }
  };

  const onToggleButtonClick = (companyName) => {
    switch (companyName) {
      case "QB":
        toggleStatus(qbWorkExperience, setQbWorkExperience);
        break;
      case "PROLIFICS":
        toggleStatus(prolificsWorkExperience, setProlificsWorkExperience);
        break;
      case "INFOSYS_TA":
        toggleStatus(infosysTaWorkExperience, setInfosysTaWorkExperience);
        break;
      case "INFOSYS_SSE":
        toggleStatus(infosysSseWorkExperience, setInfosysSseWorkExperience);
        break;
      case "INFOSYS_SE":
        toggleStatus(infosysSeWorkExperience, setInfosysSeWorkExperience);
        break;
      default:
        break;
    }
  };

  const createMetadata = (company) => {
    const companyDetails = work_experience[company];
    const companyDetailsMetadata = {};
    companyDetailsMetadata.companyName = company;
    companyDetailsMetadata.position = companyDetails.position;
    companyDetailsMetadata.duration = companyDetails.duration;
    companyDetailsMetadata.description = companyDetails.description;
    switch (company) {
      case "Quick_Base":
        companyDetailsMetadata.state = qbWorkExperience;
        companyDetailsMetadata.clickEvent = () => onToggleButtonClick("QB");
        break;
      case "Prolifics":
        companyDetailsMetadata.state = prolificsWorkExperience;
        companyDetailsMetadata.clickEvent = () =>
          onToggleButtonClick("PROLIFICS");
        break;
      case "Infosys_TA":
        companyDetailsMetadata.state = infosysTaWorkExperience;
        companyDetailsMetadata.clickEvent = () =>
          onToggleButtonClick("INFOSYS_TA");
        break;
      case "Infosys_SSE":
        companyDetailsMetadata.state = infosysSseWorkExperience;
        companyDetailsMetadata.clickEvent = () =>
          onToggleButtonClick("INFOSYS_SSE");
        break;
      case "Infosys_SE":
        companyDetailsMetadata.state = infosysSeWorkExperience;
        companyDetailsMetadata.clickEvent = () =>
          onToggleButtonClick("INFOSYS_SE");
        break;
      default:
        break;
    }
    
    return companyDetailsMetadata;
  };

  return (
    <Fragment>
      <div id="vp-my-professional-experience" />
      <div className="container-fluid">
        <div className="row mt-5 mb-5">
          <div className="col-md-10 offset-md-1 col-12">
            <h1 className="vp-technical-knowledge-heading">
              My Professional Experience
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10 offset-md-1 col-12">
            <section className="vp-work-experience-bar">
              <div className="container-fluid">
                {work_experience &&
                  Object.keys(work_experience).map((company) => {
                    const companyDetailsMetadata = createMetadata(company);
                    return (
                      <WorkExperienceCard
                        key={company}
                        {...companyDetailsMetadata}
                      />
                    );
                  })}
              </div>
            </section>
          </div>
        </div>
      </div>
      <PageBreak />
    </Fragment>
  );
};

export default WorkExperience;
