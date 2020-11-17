import React, { Fragment } from "react";

import SocialMediaDetails from "./social-media-details.json";
import { SocialMediaIcon, SocialMediaAnchor } from "../../styles/contact-me";

const SocialMedia = () => {
  return (
    <Fragment>
      {SocialMediaDetails
        ? Object.keys(SocialMediaDetails).map((socialMedia, index) => {
            return (
              <SocialMediaAnchor
                key={index}
                className="bg-success m-2 text-decoration-none shadow-lg"
                href={SocialMediaDetails[socialMedia].link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialMediaIcon
                  className={SocialMediaDetails[socialMedia].class}
                />
              </SocialMediaAnchor>
            );
          })
        : null}
    </Fragment>
  );
};

export default SocialMedia;
