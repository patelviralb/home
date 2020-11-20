import React, { Fragment, useState } from "react";

import {
  TimelineItem,
  TimelineBullet,
  TimelineContent,
} from "../../components/styles/common";
import {
  CompanyHeadingH5,
  DetailsIcon,
  UnorderedList,
} from "../../components/styles/work-experience";
import {
  QuickBase,
  KhouryCollegeOfComputerSciences,
  Prolifics,
  Infosys,
} from "../../components/work-experience/company-logos";

const companyLogo = (company) => {
  switch (company) {
    case "QB":
      return <QuickBase />;
    case "KHOURY_ADMIN":
      return <KhouryCollegeOfComputerSciences />;
    case "PROLIFICS":
      return <Prolifics />;
    case "INFOSYS_TA":
    case "INFOSYS_SSE":
    case "INFOSYS_SE":
      return <Infosys />;
    default:
      return null;
  }
};

const WorkExperienceItem = (props) => {
  const [qbWorkExperience, setQbWorkExperience] = useState("SHOW");
  const [khouryWorkExperience, setKhouryWorkExperience] = useState("SHOW");
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

  const onToggleButtonClick = (company) => {
    switch (company) {
      case "QB":
        toggleStatus(qbWorkExperience, setQbWorkExperience);
        break;
      case "KHOURY_ADMIN":
        toggleStatus(khouryWorkExperience, setKhouryWorkExperience);
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

  const getStateData = (company) => {
    switch (company) {
      case "QB":
        return qbWorkExperience;
      case "KHOURY_ADMIN":
        return khouryWorkExperience;
      case "PROLIFICS":
        return prolificsWorkExperience;
      case "INFOSYS_TA":
        return infosysTaWorkExperience;
      case "INFOSYS_SSE":
        return infosysSseWorkExperience;
      case "INFOSYS_SE":
        return infosysSeWorkExperience;
      default:
        return undefined;
    }
  };

  const companyDetails = props.companyDetails;

  return (
    <Fragment>
      <TimelineItem className="mt-5">
        <TimelineBullet />
        <TimelineContent>
          <div className="row mt-3">
            <div className="col-12 d-flex justify-content-center flex-column">
              {companyLogo(props.company)}
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12 d-flex justify-content-center flex-column">
              <CompanyHeadingH5>{companyDetails.companyName}</CompanyHeadingH5>
              <CompanyHeadingH5>{companyDetails.position}</CompanyHeadingH5>
              <CompanyHeadingH5>{companyDetails.duration}</CompanyHeadingH5>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-12 d-flex justify-content-center flex-column">
              <div
                data-toggle="collapse"
                data-target={`#vp-${props.company}-work-experience`}
                aria-expanded="false"
                className="btn vp-details-button"
                onClick={() => onToggleButtonClick(props.company)}
              >
                {getStateData(props.company)} DETAILS
                <DetailsIcon
                  details={getStateData(props.company)}
                  className={`ml-2 fas fa-chevron-down`}
                />
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-12 d-flex justify-content-center flex-column">
              <UnorderedList
                className="card-text text-justify collapse"
                id={`vp-${props.company}-work-experience`}
              >
                {[...companyDetails.responsibilities].map(
                  (responsibility, index) => (
                    <li key={index} className="mb-2">
                      {responsibility}
                    </li>
                  )
                )}
              </UnorderedList>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
    </Fragment>
  );
};

export default WorkExperienceItem;
