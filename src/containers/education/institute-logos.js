import React from "react";

import { InstituteLogoAnchor } from "../../components/styles/education";
import { NortheasternUniversityImage } from "../../components/styles/education";
import NortheasternUniversityLogoImage from "./Notched N Motto Wordmark Lockup_Nmotto+Northeastern_BRB.png";

export const NortheasternUniversity = () => {
  return (
    <InstituteLogoAnchor
      href="https://www.northeastern.edu/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <NortheasternUniversityImage
        src={NortheasternUniversityLogoImage}
        alt="Khoury College of Computer Sciences"
      />
    </InstituteLogoAnchor>
  );
};
