import React, { Fragment, useState } from "react";
import styled from "styled-components";

import "./work-experience-style.scss";
import { work_experience } from "./work-experience-json";
import WorkExperienceCard from "./work-experience-card";
import PageBreak from "../page-break";
import { Infosys, Prolifics } from "./company-logos";

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
        {/* <div className="row">
          <div className="col-md-10 offset-md-1 col-12">
            <div className="row">
              <div className="col-12">
                <div className="card shadow rounded container-fluid">
                  <div className="row">
                    <div className="col-12 col-lg-4 d-flex justify-content-center">
                      <div className="align-self-center mt-4 mt-lg-0">
                        <Prolifics />
                      </div>
                    </div>
                    <div className="col-12 col-lg-8">
                      <div className="card-body">
                        <div className="d-flex justify-content-center justify-content-lg-end">
                          <h3>Prolifics</h3>
                        </div>
                        <div className="d-flex justify-content-center justify-content-lg-end">
                          <h4>Senior Software Engineer</h4>
                        </div>
                        <div className="d-flex justify-content-center justify-content-lg-end">
                          <h5>November 2018 - August 2019</h5>
                        </div>
                        <div className="d-flex justify-content-center">
                          <button
                            data-toggle="collapse"
                            data-target={`#vp-prolifics-work-experience`}
                            aria-expanded="false"
                            className="btn vp-details-button"
                            onClick={() => onToggleButtonClick("PROLIFICS")}
                          >
                            {prolificsWorkExperience} DETAILS
                            <DetailsIcon
                              details={prolificsWorkExperience}
                              className={`ml-2 fas fa-chevron-down`}
                            />
                          </button>
                        </div>
                        <ul
                          className="card-text text-justify collapse"
                          id={`vp-prolifics-work-experience`}
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-10 offset-md-1 col-12">
            <div className="row">
              <div className="col-12">
                <div className="card shadow rounded container-fluid">
                  <div className="row">
                    <div className="col-12 col-lg-8">
                      <div className="card-body">
                        <div className="d-flex justify-content-center justify-content-lg-end">
                          <h3>Prolifics</h3>
                        </div>
                        <div className="d-flex justify-content-center justify-content-lg-end">
                          <h4>Senior Software Engineer</h4>
                        </div>
                        <div className="d-flex justify-content-center justify-content-lg-end">
                          <h5>November 2018 - August 2019</h5>
                        </div>
                        <div className="d-flex justify-content-center">
                          <button
                            data-toggle="collapse"
                            data-target={`#vp-prolifics-work-experience`}
                            aria-expanded="false"
                            className="btn vp-details-button"
                            onClick={() => onToggleButtonClick("PROLIFICS")}
                          >
                            {prolificsWorkExperience} DETAILS
                            <DetailsIcon
                              details={prolificsWorkExperience}
                              className={`ml-2 fas fa-chevron-down`}
                            />
                          </button>
                        </div>
                        <ul
                          className="card-text text-justify collapse"
                          id={`vp-prolifics-work-experience`}
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
                    <div className="col-12 col-lg-4 d-flex justify-content-center">
                      <div className="align-self-center mt-4 mt-lg-0">
                        <Infosys />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-10 offset-md-1 col-12">
            <div className="row">
              <div className="col-12">
                <div className="card shadow rounded container-fluid">
                  <div className="row">
                    <div className="col-12 col-lg-4 d-flex justify-content-center">
                      <div className="align-self-center mt-4 mt-lg-0">
                        <Infosys />
                      </div>
                    </div>
                    <div className="col-12 col-lg-8">
                      <div className="card-body">
                        <div className="d-flex justify-content-center">
                          <h3>Prolifics</h3>
                        </div>
                        <div className="d-flex justify-content-center">
                          <h4>Senior Software Engineer</h4>
                        </div>
                        <div className="d-flex justify-content-center">
                          <h5>November 2018 - August 2019</h5>
                        </div>
                        <div className="d-flex justify-content-center">
                          <button
                            data-toggle="collapse"
                            data-target={`#vp-prolifics-work-experience`}
                            aria-expanded="false"
                            className="btn vp-details-button"
                            onClick={() => onToggleButtonClick("PROLIFICS")}
                          >
                            {prolificsWorkExperience} DETAILS
                            <DetailsIcon
                              details={prolificsWorkExperience}
                              className={`ml-2 fas fa-chevron-down`}
                            />
                          </button>
                        </div>
                        <ul
                          className="card-text text-justify collapse"
                          id={`vp-prolifics-work-experience`}
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-10 offset-md-1 col-12">
            <div className="row">
              <div className="col-12">
                <div className="card shadow rounded container-fluid">
                  <div className="row">
                    <div className="col-12 col-lg-8">
                      <div className="card-body">
                        <div className="d-flex justify-content-center">
                          <h3>Prolifics</h3>
                        </div>
                        <div className="d-flex justify-content-center">
                          <h4>Senior Software Engineer</h4>
                        </div>
                        <div className="d-flex justify-content-center">
                          <h5>November 2018 - August 2019</h5>
                        </div>
                        <div className="d-flex justify-content-center">
                          <button
                            data-toggle="collapse"
                            data-target={`#vp-prolifics-work-experience`}
                            aria-expanded="false"
                            className="btn vp-details-button"
                            onClick={() => onToggleButtonClick("PROLIFICS")}
                          >
                            {prolificsWorkExperience} DETAILS
                            <DetailsIcon
                              details={prolificsWorkExperience}
                              className={`ml-2 fas fa-chevron-down`}
                            />
                          </button>
                        </div>
                        <ul
                          className="card-text text-justify collapse"
                          id={`vp-prolifics-work-experience`}
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
                    <div className="col-12 col-lg-4 d-flex justify-content-center">
                      <div className="align-self-center mt-4 mt-lg-0">
                        <Infosys />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-10 offset-md-1 col-12">
            <div className="row">
              <div className="col-12">
                <div className="card shadow rounded container-fluid">
                  <div className="row">
                    <div className="col-12 col-lg-4 d-flex justify-content-center">
                      <div className="align-self-center mt-4 mt-lg-0">
                        <Infosys />
                      </div>
                    </div>
                    <div className="col-12 col-lg-8">
                      <div className="card-body">
                        <div className="d-flex justify-content-center justify-content-lg-start">
                          <h3>Prolifics</h3>
                        </div>
                        <div className="d-flex justify-content-center justify-content-lg-start">
                          <h4>Senior Software Engineer</h4>
                        </div>
                        <div className="d-flex justify-content-center justify-content-lg-start">
                          <h5>November 2018 - August 2019</h5>
                        </div>
                        <div className="d-flex justify-content-center">
                          <button
                            data-toggle="collapse"
                            data-target={`#vp-prolifics-work-experience`}
                            aria-expanded="false"
                            className="btn vp-details-button"
                            onClick={() => onToggleButtonClick("PROLIFICS")}
                          >
                            {prolificsWorkExperience} DETAILS
                            <DetailsIcon
                              details={prolificsWorkExperience}
                              className={`ml-2 fas fa-chevron-down`}
                            />
                          </button>
                        </div>
                        <ul
                          className="card-text text-justify collapse"
                          id={`vp-prolifics-work-experience`}
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-10 offset-md-1 col-12">
            <div className="row">
              <div className="col-12">
                <div className="card shadow rounded container-fluid">
                  <div className="row">
                    <div className="col-12 col-lg-8">
                      <div className="card-body">
                        <div className="d-flex justify-content-center justify-content-lg-start">
                          <h3>Prolifics</h3>
                        </div>
                        <div className="d-flex justify-content-center justify-content-lg-start">
                          <h4>Senior Software Engineer</h4>
                        </div>
                        <div className="d-flex justify-content-center justify-content-lg-start">
                          <h5>November 2018 - August 2019</h5>
                        </div>
                        <div className="d-flex justify-content-center">
                          <button
                            data-toggle="collapse"
                            data-target={`#vp-prolifics-work-experience`}
                            aria-expanded="false"
                            className="btn vp-details-button"
                            onClick={() => onToggleButtonClick("PROLIFICS")}
                          >
                            {prolificsWorkExperience} DETAILS
                            <DetailsIcon
                              details={prolificsWorkExperience}
                              className={`ml-2 fas fa-chevron-down`}
                            />
                          </button>
                        </div>
                        <ul
                          className="card-text text-justify collapse"
                          id={`vp-prolifics-work-experience`}
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
                    <div className="col-12 col-lg-4 d-flex justify-content-center">
                      <div className="align-self-center mt-4 mt-lg-0">
                        <Infosys />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-10 offset-md-1 col-12">
            <div className="row">
              <div className="col-12">
                <div className="card shadow rounded container-fluid">
                  <div className="row">
                    <div className="col-12 col-lg-4 d-flex justify-content-center">
                      <div className="align-self-center mt-4 mt-lg-0">
                        <Infosys />
                      </div>
                    </div>
                    <div className="col-12 col-lg-8">
                      <div className="card-body">
                        <div className="d-flex justify-content-center justify-content-lg-start">
                          <h3>Prolifics</h3>
                        </div>
                        <div className="d-flex justify-content-center justify-content-lg-start">
                          <h4>Senior Software Engineer</h4>
                        </div>
                        <div className="d-flex justify-content-center justify-content-lg-start">
                          <h5>November 2018 - August 2019</h5>
                        </div>
                        <div className="d-flex justify-content-center">
                          <button
                            data-toggle="collapse"
                            data-target={`#vp-prolifics-work-experience`}
                            aria-expanded="false"
                            className="btn vp-details-button"
                            onClick={() => onToggleButtonClick("PROLIFICS")}
                          >
                            {prolificsWorkExperience} DETAILS
                            <DetailsIcon
                              details={prolificsWorkExperience}
                              className={`ml-2 fas fa-chevron-down`}
                            />
                          </button>
                        </div>
                        <ul
                          className="card-text text-justify collapse"
                          id={`vp-prolifics-work-experience`}
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-10 offset-md-1 col-12">
            <div className="row">
              <div className="col-12">
                <div className="card shadow rounded container-fluid">
                  <div className="row">
                    <div className="col-12 col-lg-8">
                      <div className="card-body">
                        <div className="d-flex justify-content-center justify-content-lg-end">
                          <h3>Prolifics</h3>
                        </div>
                        <div className="d-flex justify-content-center justify-content-lg-end">
                          <h4>Senior Software Engineer</h4>
                        </div>
                        <div className="d-flex justify-content-center justify-content-lg-end">
                          <h5>November 2018 - August 2019</h5>
                        </div>
                        <div className="d-flex justify-content-center">
                          <button
                            data-toggle="collapse"
                            data-target={`#vp-prolifics-work-experience`}
                            aria-expanded="false"
                            className="btn vp-details-button"
                            onClick={() => onToggleButtonClick("PROLIFICS")}
                          >
                            {prolificsWorkExperience} DETAILS
                            <DetailsIcon
                              details={prolificsWorkExperience}
                              className={`ml-2 fas fa-chevron-down`}
                            />
                          </button>
                        </div>
                        <ul
                          className="card-text text-justify collapse"
                          id={`vp-prolifics-work-experience`}
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
                    <div className="col-12 col-lg-4 d-flex justify-content-center">
                      <div className="align-self-center mt-4 mt-lg-0">
                        <Infosys />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="vp-large-screen">
          <div className="row mt-3">
            <div className="col-md-10 offset-md-1 col-12">
              <div className="row">
                <div className="col-12">
                  <div className="card shadow rounded container-fluid">
                    <div className="row">
                      <div className="col-lg-4 d-flex justify-content-center">
                        <div className="align-self-center mt-4 mt-lg-0">
                          <Infosys />
                        </div>
                      </div>
                      <div className="col-lg-8 d-flex justify-content-center">
                        <div className="align-self-center mt-4 mt-lg-0">
                          <h1>Data</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-10 offset-md-1 col-12">
              <div className="row">
                <div className="col-12">
                  <div className="card shadow rounded container-fluid">
                    <div className="row">
                      <div className="col-lg-8 d-flex justify-content-center">
                        <div className="align-self-center mt-4 mt-lg-0">
                          <h1>Data</h1>
                        </div>
                      </div>
                      <div className="col-lg-4 d-flex justify-content-center">
                        <div className="align-self-center mt-4 mt-lg-0">
                          <Infosys />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="vp-small-screen">
          <div className="row mt-3">
            <div className="col-md-10 offset-md-1 col-12">
              <div className="row">
                <div className="col-12">
                  <div className="card shadow rounded container-fluid">
                    <div className="row">
                      <div className="col-12 d-flex justify-content-center">
                        <div className="align-self-center mt-4 mt-lg-0">
                          <Infosys />
                        </div>
                      </div>
                      <div className="col-12 d-flex justify-content-center">
                        <div className="align-self-center mt-4 mt-lg-0">
                          <h1>Data</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-10 offset-md-1 col-12">
              <div className="row">
                <div className="col-12">
                  <div className="card shadow rounded container-fluid">
                    <div className="row">
                      <div className="col-12 d-flex justify-content-center">
                        <div className="align-self-center mt-4 mt-lg-0">
                          <Infosys />
                        </div>
                      </div>
                      <div className="col-12 d-flex justify-content-center">
                        <div className="align-self-center mt-4 mt-lg-0">
                          <h1>Data</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PageBreak />
    </Fragment>
  );
};

export default WorkExperience;
