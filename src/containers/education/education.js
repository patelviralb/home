import React, { Fragment } from "react";

import {
  TimelineBar,
  TimelineBullet,
  TimelineItem,
  TimelineContent,
  Date,
  Image,
  CenterAlignedContainer,
} from "../../components/styles/education";
import neu_image from "./northeastern-university.png";
import sbmp_image from "./sbmp.jpg";
import mu_image from "./university-of-mumbai.png";
import {
  SectionHeadingH1,
  SectionHeadingH3,
  SectionSubHeadingH4,
  SectionHeadingH5,
  SectionHeadingH6,
} from "../../components/styles/common";
import PageBreak from "../../components/page-break";

import { NortheasternUniversity } from "./institute-logos";

const Education = () => {
  return (
    <Fragment>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-12">
            <SectionHeadingH1>My Education</SectionHeadingH1>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-10 offset-md-1 col-12">
            <div className="container-fluid">
              <div className="card shadow-lg">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-4 col-12 d-flex justify-content-center flex-column ">
                      <div>
                        <NortheasternUniversity />
                      </div>
                      <div className="d-flex justify-content-center mt-2">
                        <SectionSubHeadingH4>
                          Graduate Studies
                        </SectionSubHeadingH4>
                      </div>
                      <div className="d-flex justify-content-center mt-2">
                        <SectionSubHeadingH4>
                          September 2019 - December 2021
                        </SectionSubHeadingH4>
                      </div>
                    </div>
                    <div className="col-lg-8 col-12 p-4">
                      <a
                        style={{ textDecoration: "none", outline: 0 }}
                        href="https://www.northeastern.edu/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SectionHeadingH3>
                          Northeastern University
                        </SectionHeadingH3>
                      </a>

                      <a
                        style={{ textDecoration: "none", outline: 0 }}
                        href="https://www.khoury.northeastern.edu/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SectionHeadingH3>
                          Khoury College of Computer Sciences
                        </SectionHeadingH3>
                      </a>

                      <SectionHeadingH6>BOSTON, MA</SectionHeadingH6>

                      <div className="mt-4">
                        <SectionHeadingH5>
                          Master of Science - Computer Science
                        </SectionHeadingH5>
                        <SectionHeadingH5>Related Courses:</SectionHeadingH5>
                        <span
                          class="badge badge-pill badge-warning m-2"
                          style={{ fontWeight: "normal", fontSize: "15px" }}
                        >
                          Programming Design Paradigm
                        </span>
                        <span
                          class="badge badge-pill badge-warning m-2"
                          style={{ fontWeight: "normal", fontSize: "15px" }}
                        >
                          Foundation of Artificial Intelligence
                        </span>
                        <span
                          class="badge badge-pill badge-warning m-2"
                          style={{ fontWeight: "normal", fontSize: "15px" }}
                        >
                          Web Development
                        </span>
                        <span
                          class="badge badge-pill badge-warning m-2"
                          style={{ fontWeight: "normal", fontSize: "15px" }}
                        >
                          Algorithms
                        </span>
                        <span
                          class="badge badge-pill badge-warning m-2"
                          style={{ fontWeight: "normal", fontSize: "15px" }}
                        >
                          Foundation of Software Engineering
                        </span>
                        <span
                          class="badge badge-pill badge-warning m-2"
                          style={{ fontWeight: "normal", fontSize: "15px" }}
                        >
                          Large Scale Parallel Data Processing
                        </span>
                        <span
                          class="badge badge-pill badge-warning m-2"
                          style={{ fontWeight: "normal", fontSize: "15px" }}
                        >
                          Natural Language Processing
                        </span>
                        {/* <div
                          style={{
                            height: "20px",
                            backgroundColor: "#ffa45b",
                            padding: "5px",
                            borderRadius: "15px",
                          }}
                        >
                          
                        </div>
                        <div
                          style={{
                            height: "20px",
                            backgroundColor: "#ffa45b",
                            padding: "5px",
                            borderRadius: "15px",
                          }}
                        >
                          Web Development
                        </div>
                        <div
                          style={{
                            height: "20px",
                            backgroundColor: "#ffa45b",
                            padding: "5px",
                            borderRadius: "15px",
                          }}
                        >
                          Algorithms
                        </div>
                        <div
                          style={{
                            height: "20px",
                            backgroundColor: "#ffa45b",
                            padding: "5px",
                            borderRadius: "15px",
                          }}
                        >
                          Foundation of Software Engineering
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="card shadow-lg">
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div> */}
              <div className="card shadow-lg mt-1">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-4 col-12 d-flex justify-content-center flex-column">
                      <div>
                        <NortheasternUniversity />
                      </div>
                      <div className="d-flex justify-content-center mt-2">
                        <SectionSubHeadingH4>
                          Graduate Studies
                        </SectionSubHeadingH4>
                      </div>
                      <div className="d-flex justify-content-center mt-2">
                        <SectionSubHeadingH4>
                          September 2019 - Present
                        </SectionSubHeadingH4>
                      </div>
                    </div>
                    <div className="col-lg-8 col-12 p-4">
                      <a
                        style={{ textDecoration: "none", outline: 0 }}
                        href="https://www.northeastern.edu/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SectionHeadingH3>
                          Northeastern University
                        </SectionHeadingH3>
                      </a>

                      <a
                        style={{ textDecoration: "none", outline: 0 }}
                        href="https://www.khoury.northeastern.edu/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SectionHeadingH3>
                          Khoury College of Computer Sciences
                        </SectionHeadingH3>
                      </a>

                      <SectionHeadingH6>BOSTON, MA</SectionHeadingH6>

                      <div className="mt-4">
                        <SectionHeadingH5>
                          Master of Science - Computer Science
                        </SectionHeadingH5>
                        <SectionHeadingH5>Related Courses:</SectionHeadingH5>
                        <span
                          style={{
                            height: "20px",
                            backgroundColor: "#ffa45b",
                            padding: "5px",
                            borderRadius: "15px",
                          }}
                        >
                          Programming Design Paradigm
                        </span>
                        <span
                          style={{
                            height: "20px",
                            backgroundColor: "#ffa45b",
                            padding: "5px",
                            borderRadius: "15px",
                          }}
                        >
                          Foundation of Artificial Intelligence
                        </span>
                        <span
                          style={{
                            height: "20px",
                            backgroundColor: "#ffa45b",
                            padding: "5px",
                            borderRadius: "15px",
                          }}
                        >
                          Web Development
                        </span>
                        <span
                          style={{
                            height: "20px",
                            backgroundColor: "#ffa45b",
                            padding: "5px",
                            borderRadius: "15px",
                          }}
                        >
                          Algorithms
                        </span>
                        <span
                          style={{
                            height: "20px",
                            backgroundColor: "#ffa45b",
                            padding: "5px",
                            borderRadius: "15px",
                          }}
                        >
                          Foundation of Software Engineering
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card shadow-lg mt-1">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-4 col-12 d-flex justify-content-center flex-column">
                      <div>
                        <NortheasternUniversity />
                      </div>
                      <div className="d-flex justify-content-center mt-2">
                        <SectionSubHeadingH4>
                          Graduate Studies
                        </SectionSubHeadingH4>
                      </div>
                      <div className="d-flex justify-content-center mt-2">
                        <SectionSubHeadingH4>
                          September 2019 - Present
                        </SectionSubHeadingH4>
                      </div>
                    </div>
                    <div className="col-lg-8 col-12 p-4">
                      <a
                        style={{ textDecoration: "none", outline: 0 }}
                        href="https://www.northeastern.edu/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SectionHeadingH3>
                          Northeastern University
                        </SectionHeadingH3>
                      </a>

                      <a
                        style={{ textDecoration: "none", outline: 0 }}
                        href="https://www.khoury.northeastern.edu/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SectionHeadingH3>
                          Khoury College of Computer Sciences
                        </SectionHeadingH3>
                      </a>

                      <SectionHeadingH6>BOSTON, MA</SectionHeadingH6>

                      <div className="mt-4">
                        <SectionHeadingH5>
                          Master of Science - Computer Science
                        </SectionHeadingH5>
                        <SectionHeadingH5>Related Courses:</SectionHeadingH5>
                        <span
                          style={{
                            height: "20px",
                            backgroundColor: "#ffa45b",
                            padding: "5px",
                            borderRadius: "15px",
                          }}
                        >
                          Programming Design Paradigm
                        </span>
                        <span
                          style={{
                            height: "20px",
                            backgroundColor: "#ffa45b",
                            padding: "5px",
                            borderRadius: "15px",
                          }}
                        >
                          Foundation of Artificial Intelligence
                        </span>
                        <span
                          style={{
                            height: "20px",
                            backgroundColor: "#ffa45b",
                            padding: "5px",
                            borderRadius: "15px",
                          }}
                        >
                          Web Development
                        </span>
                        <span
                          style={{
                            height: "20px",
                            backgroundColor: "#ffa45b",
                            padding: "5px",
                            borderRadius: "15px",
                          }}
                        >
                          Algorithms
                        </span>
                        <span
                          style={{
                            height: "20px",
                            backgroundColor: "#ffa45b",
                            padding: "5px",
                            borderRadius: "15px",
                          }}
                        >
                          Foundation of Software Engineering
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="card shadow-lg">
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <PageBreak />
      {/* <div id="vp-my-education" />
      <div className="container-fluid">
        <div className="row mt-5 mb-5">
          <div className="col-md-10 offset-md-1 col-12">
            <h1 className="vp-technical-knowledge-heading">My Education</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-10 offset-md-1 col-12">
            <div className="container-fluid">
              <div class="card" style={{ width: "18rem" }}>
                <img class="card-img-top" src="..." alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </Fragment>
  );
};

export default Education;
