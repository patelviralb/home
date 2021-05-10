import React from "react";

import { TimelineBar } from "../styles/common";
import WorkExperienceDetails from "../../data/work-experience/work-experience-details.json";
import WorkExperienceItem from "../../containers/work-experience";

const WorkExperienceTimeline = () => {
  return (
    <TimelineBar>
      <div className="container-fluid">
        {WorkExperienceDetails &&
          Object.keys(WorkExperienceDetails).map((company, index) => {
            return (
              <WorkExperienceItem
                key={index}
                company={company}
                companyDetails={WorkExperienceDetails[company]}
              />
            );
          })}
      </div>
    </TimelineBar>
  );
};

export default WorkExperienceTimeline;
