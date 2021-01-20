import React, { Fragment } from "react";

import { CenterAlignedContainer, SectionSubHeadingH4 } from "../styles/common";
import { EmailMeButtonText } from "../styles/contact-me";
import SocialMedia from "./social-media";

const ContactMe = () => {
  return (
    <Fragment>
      <div id="vp-contact-me" />
      <div className="container-fluid mt-5">
        <div className="row">
          <CenterAlignedContainer className="col-md-10 offset-md-1 col-12">
            <SectionSubHeadingH4>
              Wanna reach out to me? You can e-mail me
            </SectionSubHeadingH4>
          </CenterAlignedContainer>
        </div>
        <div className="row mt-2">
          <CenterAlignedContainer className="col-md-10 offset-md-1 col-12">
            <a
              className="btn btn-primary font-weight-bold shadow-lg rounded text-decoration-none"
              href="mailto:patel.viral@northeastern.edu?subject=Hi Viral!"
            >
              <i className="fas fa-envelope mr-2" />
              <EmailMeButtonText>Let's Talk</EmailMeButtonText>
            </a>
          </CenterAlignedContainer>
        </div>
        <div className="row mt-5">
          <CenterAlignedContainer className="col-md-10 offset-md-1 col-12">
            <SectionSubHeadingH4>
              Or, we can connect over my social media!
            </SectionSubHeadingH4>
          </CenterAlignedContainer>
        </div>
        <div className="row mt-2">
          <CenterAlignedContainer className="col-md-10 offset-md-1 col-12">
            <SocialMedia />
          </CenterAlignedContainer>
        </div>
      </div>
      <div className="mb-5" />
      {/* <PageBreak /> */}
    </Fragment>
  );
};

export default ContactMe;
