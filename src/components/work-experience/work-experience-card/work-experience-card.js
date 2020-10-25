import React from "react";
import styled from "styled-components";

import "./work-experience-card-style.scss";
import { Infosys, Prolifics, QuickBase } from "../company-logos";

const DetailsIcon = styled.i`
  transform: rotate(0deg);
  transition: all 0.4s ease-out;
  transform: ${(props) => (props.details === "HIDE" ? `rotate(180deg)` : "")};
`;

const getCompanyLogo = (companyName) => {
  switch (companyName) {
    case "Quick_Base":
      return <QuickBase />;
    case "Prolifics":
      return <Prolifics />;
    case "Infosys_TA":
    case "Infosys_SSE":
    case "Infosys_SE":
      return <Infosys />;
    default:
      return null;
  }
};

const WorkExperienceCard = ({
  companyName,
  position,
  duration,
  description,
  state,
  clickEvent,
}) => {
  return (
    <div className="vp-work-experience-item">
      <div className="vp-work-experience-item-bullet" />
      <div className="vp-work-experience-content">
        <h4 className="mt-5 pt-4">{position}</h4>
        {getCompanyLogo(companyName)}
        <div className="vp-work-experience-duration">{duration}</div>
        <div className="vp-display-details-button">
          <button
            data-toggle="collapse"
            data-target={`#vp-${companyName}-work-experience`}
            aria-expanded="false"
            className="btn vp-details-button"
            onClick={clickEvent}
          >
            {state} DETAILS
            <DetailsIcon
              details={state}
              className={`ml-2 fas fa-chevron-down`}
            />
          </button>
        </div>
        <blockquote className="vp-work-experience-description">
          <ul className="collapse" id={`vp-${companyName}-work-experience`}>
            {description &&
              description.map((descriptionBullet, index) => {
                return (
                  <li
                    key={index}
                    className="vp-work-experience-description-bullets"
                  >
                    {descriptionBullet}
                  </li>
                );
              })}
          </ul>
        </blockquote>
      </div>
    </div>
  );
};

export default WorkExperienceCard;
