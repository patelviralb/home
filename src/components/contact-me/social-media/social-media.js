import React, { Fragment } from "react";

import SocialMediaDetails from "./data/social-media-details.json";
import { SocialMediaIcon, SocialMediaAnchor } from "../../styles/contact-me";
import {
  CenterAlignedContainer,
  SectionSubHeadingH4,
} from "../../styles/common";
import {
  removeButtonFocusAfterClick,
  checkPressedKey,
} from "../../utils/removeButtonFocusAfterClick";

const SocialMedia = () => {
  return (
    <Fragment>
      <div className="row mt-5">
        <CenterAlignedContainer className="col-md-10 offset-md-1 col-12">
          <SectionSubHeadingH4>
            Or, we can connect over my social media!
          </SectionSubHeadingH4>
        </CenterAlignedContainer>
      </div>
      <div className="row mt-2">
        <CenterAlignedContainer className="col-md-10 offset-md-1 col-12">
          {SocialMediaDetails
            ? Object.keys(SocialMediaDetails).map((socialMedia, index) => {
                return (
                  <SocialMediaAnchor
                    key={index}
                    className="bg-success m-2 text-decoration-none shadow-lg"
                    href={SocialMediaDetails[socialMedia].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseDown={removeButtonFocusAfterClick}
                    onKeyUp={checkPressedKey}
                    title={socialMedia}
                  >
                    <SocialMediaIcon
                      className={SocialMediaDetails[socialMedia].class}
                    />
                  </SocialMediaAnchor>
                );
              })
            : null}
        </CenterAlignedContainer>
      </div>
    </Fragment>
  );
};

export default SocialMedia;
