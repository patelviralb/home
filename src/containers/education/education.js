import React, { Fragment } from "react";

import {
  TimelineBar,
  TimelineBullet,
  TimelineItem,
  TimelineContent,
  Date,
  Image,
  CenterAlignedContainer,
} from "../../components/styled/education";
import neu_image from "./northeastern-university.png";
import sbmp_image from "./sbmp.jpg";
import mu_image from "./university-of-mumbai.png";

const Education = () => {
  return (
    <Fragment>
      <div id="vp-my-education" />
      <div className="container-fluid">
        <div className="row mt-5 mb-5">
          <div className="col-md-10 offset-md-1 col-12">
            <h1 className="vp-technical-knowledge-heading">My Education</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-10 offset-md-1 col-12">
            <TimelineBar>
              <div className="container">
                <TimelineItem>
                  <TimelineBullet />
                  <TimelineContent>
                    <CenterAlignedContainer>
                      <Image src={neu_image} />
                      <h2 className="align-self-center">Master of Science</h2>
                      <h2 className="align-self-center">Computer Science</h2>
                      <h3 className="align-self-center">
                        Northeastern University
                      </h3>
                      <h4 className="align-self-center">
                        September 2019 - Present
                      </h4>
                    </CenterAlignedContainer>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineBullet />
                  <TimelineContent>
                    <CenterAlignedContainer>
                      <Image src={sbmp_image} />
                      <h2 className="align-self-center">Master of Science</h2>
                      <h2 className="align-self-center">Computer Science</h2>
                      <h3 className="align-self-center">
                        Northeastern University
                      </h3>
                      <h4 className="align-self-center">
                        September 2019 - Present
                      </h4>
                    </CenterAlignedContainer>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineBullet />
                  <TimelineContent>
                    <CenterAlignedContainer>
                      <Image src={mu_image} />
                      <h2 className="align-self-center">Master of Science</h2>
                      <h2 className="align-self-center">Computer Science</h2>
                      <h3 className="align-self-center">
                        Northeastern University
                      </h3>
                      <h4 className="align-self-center">
                        September 2019 - Present
                      </h4>
                    </CenterAlignedContainer>
                  </TimelineContent>
                </TimelineItem>
              </div>
            </TimelineBar>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Education;
