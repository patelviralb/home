import React, { Fragment, useState } from "react";
import styled from "styled-components";

import "./work-experience-style.scss";
import { work_experience } from "./work-experience-json";
import WorkExperienceCard from "./work-experience-card";
import PageBreak from "../page-break";
import { Infosys, Prolifics, QuickBase } from "./company-logos";
import prolifics_logo from "./company-logos/prolifics_web_white.png";

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

                {/* */}
                <div className="vp-work-experience-item">
                  <div className="vp-work-experience-item-bullet" />
                  <div className="vp-work-experience-content">
                    <div className="row">
                      <div className="col-8">
                        <div
                          className="d-flex justify-content-center w-100 text-white"
                          style={{ background: "#EF6950", padding: "13px" }}
                        >
                          December 2020 - December 2021
                        </div>
                        <div className="d-flex justify-content-center w-100 text-white">
                          <h3 className="text-success">Prolifics</h3>
                        </div>
                        <div className="d-flex justify-content-center w-100 text-white">
                          <h4 className="text-warning">
                            Senior Software Engineer
                          </h4>
                        </div>
                      </div>
                      <div className="col-4 d-flex justify-content-center align-self-center">
                        <img
                          src={prolifics_logo}
                          alt={"Prolifics"}
                          style={{
                            backgroundColor: "#4297d2",
                          }}
                          className="p-2"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="vp-display-details-button">
                          <button
                            data-toggle="collapse"
                            data-target={`#vp-show-work-experience`}
                            aria-expanded="false"
                            className="btn vp-details-button"
                            onClick={() => {}}
                          >
                            {qbWorkExperience} DETAILS
                            <DetailsIcon
                              details={qbWorkExperience}
                              className={`ml-2 fas fa-chevron-down`}
                            />
                          </button>
                        </div>
                        <blockquote className="vp-work-experience-description">
                          <ul
                            className="collapse"
                            id={`vp-show-work-experience`}
                          >
                            <li className="vp-work-experience-description-bullets">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                            </li>
                            <li className="vp-work-experience-description-bullets">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book.
                            </li>
                          </ul>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>

                {/* */}

                <div className="vp-work-experience-item">
                  <div className="vp-work-experience-item-bullet" />
                  <div className="vp-work-experience-content">
                    <div className="row">
                      <div className="col-4 d-flex justify-content-center">
                        <Infosys />
                      </div>
                      <div className="col-8">
                        <div
                          className="d-flex justify-content-center w-100 text-white"
                          style={{ background: "#EF6950", padding: "13px" }}
                        >
                          December 2020 - December 2021
                        </div>
                        <div className="d-flex justify-content-center w-100 text-white">
                          <h3 className="text-success">Infosys Ltd.</h3>
                        </div>
                        <div className="d-flex justify-content-center w-100 text-white">
                          <h4 className="text-warning">Technology Analyst</h4>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="vp-display-details-button">
                          <button
                            data-toggle="collapse"
                            data-target={`#vp-show-work-experience`}
                            aria-expanded="false"
                            className="btn vp-details-button"
                            onClick={() => {}}
                          >
                            {qbWorkExperience} DETAILS
                            <DetailsIcon
                              details={qbWorkExperience}
                              className={`ml-2 fas fa-chevron-down`}
                            />
                          </button>
                        </div>
                        <blockquote className="vp-work-experience-description">
                          <ul
                            className="collapse"
                            id={`vp-show-work-experience`}
                          >
                            <li className="vp-work-experience-description-bullets">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                            </li>
                            <li className="vp-work-experience-description-bullets">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book.
                            </li>
                          </ul>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>

                {/* */}

                <div className="vp-work-experience-item">
                  <div className="vp-work-experience-item-bullet" />
                  <div className="vp-work-experience-content">
                    <div className="row">
                      <div className="col-8">
                        <div
                          className="d-flex justify-content-center w-100 text-white"
                          style={{ background: "#EF6950", padding: "13px" }}
                        >
                          December 2020 - December 2021
                        </div>
                        <div className="d-flex justify-content-center w-100 text-white">
                          <h3 className="text-success">Quick Base</h3>
                        </div>
                        <div className="d-flex justify-content-center w-100 text-white">
                          <h4 className="text-warning">Software Engineer Co-op</h4>
                        </div>
                      </div>
                      <div className="col-4 d-flex justify-content-center">
                        <QuickBase />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="vp-display-details-button">
                          <button
                            data-toggle="collapse"
                            data-target={`#vp-show-work-experience`}
                            aria-expanded="false"
                            className="btn vp-details-button"
                            onClick={() => {}}
                          >
                            {qbWorkExperience} DETAILS
                            <DetailsIcon
                              details={qbWorkExperience}
                              className={`ml-2 fas fa-chevron-down`}
                            />
                          </button>
                        </div>
                        <blockquote className="vp-work-experience-description">
                          <ul
                            className="collapse"
                            id={`vp-show-work-experience`}
                          >
                            <li className="vp-work-experience-description-bullets">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                            </li>
                            <li className="vp-work-experience-description-bullets">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book.
                            </li>
                          </ul>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
                {/* */}
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
