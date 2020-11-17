import React, { Fragment } from "react";

import { SectionHeadingH1 } from "../styles/common";
import PageBreak from "../page-break";
import WorkExperienceTimeline from "./work-experience-timeline";

const WorkExperience = () => {
  return (
    <Fragment>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-12">
            <SectionHeadingH1>My Work Experience</SectionHeadingH1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-10 offset-md-1 col-12">
            <WorkExperienceTimeline />
          </div>
        </div>
      </div>
      <PageBreak />
    </Fragment>
  );
};

export default WorkExperience;
