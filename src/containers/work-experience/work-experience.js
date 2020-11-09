import React, { Fragment, useState } from "react";
import styled from "styled-components";

import {
  TimelineBar,
  TimelineBullet,
  TimelineItem,
  TimelineContent,
  Date,
  Image,
  CenterAlignedContainer,
  CenterAlignedItem,
} from "../../components/styles/reuse";
import { QuickBase } from "./company-logo";
import sbmp_image from "../education/sbmp.jpg";
import mu_image from "../education/university-of-mumbai.png";
import { WorkExperienceHeading } from "../../components/styles/work-experience";
import PageBreak from "../../components/page-break";

const DetailsIcon = styled.i`
  transform: rotate(0deg);
  transition: all 0.4s ease-out;
  transform: ${(props) => (props.details === "HIDE" ? `rotate(180deg)` : "")};
`;

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
  return (
    <Fragment>
      <div id="vp-my-technical-knowledge" />
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-12">
            <WorkExperienceHeading>My Work Experience</WorkExperienceHeading>
          </div>
        </div>

        <div className="row">
          <div className="col-md-10 offset-md-1 col-12">
            <TimelineBar>
              <div className="container-fluid">
                <TimelineItem>
                  <TimelineBullet />
                  <TimelineContent>
                    <div className="row">
                      <div className="col-12 col-lg-4 d-flex justify-content-center flex-column">
                        <QuickBase />
                      </div>
                      <div className="col-12 col-lg-8 d-flex justify-content-center flex-column">
                        <h4 className="align-self-center">Quick Base</h4>
                        <h4 className="align-self-center">
                          Software Engineer Co-op
                        </h4>
                        <h4 className="align-self-center">
                          December 2020 - December 2020
                        </h4>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 d-flex justify-content-center flex-column">
                        <button
                          data-toggle="collapse"
                          data-target={`#vp-qb-work-experience`}
                          aria-expanded="false"
                          className="btn vp-details-button"
                          onClick={() => onToggleButtonClick("PROLIFICS")}
                        >
                          DETAILS
                          <DetailsIcon
                            details={prolificsWorkExperience}
                            className={`ml-2 fas fa-chevron-down`}
                          />
                        </button>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 d-flex justify-content-center flex-column">
                        <ul
                          className="card-text text-justify collapse"
                          id={`vp-qb-work-experience`}
                        >
                          <li>
                            Consulted for Health Insurance Company for creating
                            claim processing infrastructures
                          </li>
                          <li>
                            Created a unique solution to track Medicare claims
                            using ITX/IBM WTX and MySQL
                          </li>
                          <li>Worked on JSON, XML, CSV and ANSI X12 files</li>
                        </ul>
                      </div>
                    </div>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineBullet />
                  <TimelineContent>
                    <div className="row">
                      <div className="col-12 col-lg-4 d-flex justify-content-center flex-column">
                        <QuickBase />
                        <h6 className="align-self-center mt-3">Quick Base</h6>
                        <h6 className="align-self-center">
                          Software Engineer Co-op
                        </h6>
                        <h6 className="align-self-center">December 2020</h6>
                        <h6 className="align-self-center">December 2020</h6>
                      </div>
                      <div className="col-12 col-lg-8 d-flex justify-content-center flex-column">
                        <ul className="card-text text-justify">
                          <li>
                            Consulted for Health Insurance Company for creating
                            claim processing infrastructures
                          </li>
                          <li>
                            Created a unique solution to track Medicare claims
                            using ITX/IBM WTX and MySQL
                          </li>
                          <li>Worked on JSON, XML, CSV and ANSI X12 files</li>
                        </ul>
                      </div>
                    </div>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineBullet />
                  <TimelineContent>
                    <CenterAlignedContainer>
                      <QuickBase />
                      <h2 className="align-self-center">Master of Science</h2>
                      <h2 className="align-self-center">Computer Science</h2>
                      <h3 className="align-self-center">
                        Northeastern University
                      </h3>
                      <h4 className="align-self-center">
                        September 2019 - Present
                      </h4>
                    </CenterAlignedContainer>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineBullet />
                  <TimelineContent>
                    <CenterAlignedContainer>
                      <Image src={sbmp_image} />
                      <h2 className="align-self-center">Master of Science</h2>
                      <h2 className="align-self-center">Computer Science</h2>
                      <h3 className="align-self-center">
                        Northeastern University
                      </h3>
                      <h4 className="align-self-center">
                        September 2019 - Present
                      </h4>
                    </CenterAlignedContainer>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineBullet />
                  <TimelineContent>
                    <CenterAlignedContainer>
                      <Image src={mu_image} />
                      <h2 className="align-self-center">Master of Science</h2>
                      <h2 className="align-self-center">Computer Science</h2>
                      <h3 className="align-self-center">
                        Northeastern University
                      </h3>
                      <h4 className="align-self-center">
                        September 2019 - Present
                      </h4>
                    </CenterAlignedContainer>
                  </TimelineContent>
                </TimelineItem>
              </div>
            </TimelineBar>
          </div>
        </div>
      </div>
      <div className="mb-5" />
      <PageBreak />
    </Fragment>
  );
};

export default WorkExperience;
