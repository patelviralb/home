import React from "react";

import { InstituteLogoAnchor } from "../../styles/education";
import {
  NortheasternUniversityImage,
  UniversityOfMumbaiImage,
  SbmpImage,
} from "../../styles/education";
import NortheasternUniversityLogo from "../../../data/education/northeastern-university.png";
import UniversityOfMumbaiLogo from "../../../data/education/university-of-mumbai.png";
import SbmpLogo from "../../../data/education/sbmp.jpg";

const getImageSource = (university) => {
  if (university === "Northeastern University") {
    return (
      <NortheasternUniversityImage
        src={NortheasternUniversityLogo}
        alt={university}
      />
    );
  } else if (university === "University of Mumbai") {
    return (
      <UniversityOfMumbaiImage src={UniversityOfMumbaiLogo} alt={university} />
    );
  } else if (university === "Shri bhagubhai Mafatlal Polytechnic") {
    return <SbmpImage src={SbmpLogo} alt={university} />;
  }
};

export const getInstituteLogo = (props) => {
  const { university, universityHomepage } = props;

  return (
    <InstituteLogoAnchor
      href={universityHomepage}
      target="_blank"
      rel="noopener noreferrer"
    >
      {getImageSource(university)}
    </InstituteLogoAnchor>
  );
};
