import React from "react";

import { DownloadResumeButtonText } from "../styles/home";
import { CenterAlignedContainer } from "../styles/common";

const DownloadResumeButton = () => {
  return (
    <div className="row mb-4">
      <CenterAlignedContainer className="col-12 col-md-6 offset-md-3">
        <a
          className="btn btn-success font-weight-bold shadow rounded text-decoration-none"
          href="https://github.com/patelviralb/Resume/raw/master/Viral-Patel_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download="Viral-Patel_Resume.pdf"
        >
          <i className="fas fa-cloud-download-alt mr-2" />
          <DownloadResumeButtonText>Download Resume</DownloadResumeButtonText>
        </a>
      </CenterAlignedContainer>
    </div>
  );
};

export default DownloadResumeButton;
