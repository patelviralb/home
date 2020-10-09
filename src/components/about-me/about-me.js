import React, {Fragment} from "react";

import "./about-me-style.css";
import PageBreak from "../page-break";

const AboutMe = () => {
    return (
        <Fragment>
            <a id="vp-about-me"/>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-10 offset-md-1 col-12">
                        <div className="card shadow-lg rounded">
                            <div className="card-body text-justify">
                                <p className="mb-5">
                                    <span className="vp-about-me-content">
                                        I'm Software Engineer learning to make things simple and better. Currently I'm
                                        Computer Science Graduate Student at Northeastern University, Boston.
                                    </span>
                                </p>
                                <p className="mb-5">
                                    <span className="vp-about-me-content">
                                        Before commencing my graduate degree, I was working as a Software Developer
                                        with nearly 5 years of work experience. Creating a high quality modular code
                                        which is easier to maintain and extend was one of my considerable
                                        accomplishments. I also like to continuously challenge myself to innovate and/or
                                        automate things which helps me and my team to create high quality software
                                        applications. Being a firm believer of life-long learning, I always try to
                                        learn through experimentation. As a result, I would often work on some
                                        personal projects which includes domains like Web Technologies and Cloud
                                        Computing. Apart from these, I am also interested in applied Machine Learning
                                        and Artificial Intelligence.
                                    </span>
                                </p>
                                <p>
                                    <span className="vp-about-me-content">
                                        During my time-off, you'll find me casually reading books, surfing articles on
                                        the internet or watching some cartoons, sci-fi series or movies and I like to
                                        call it my passive learning.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-5"/>
            <PageBreak/>
        </Fragment>
    );
}

export default AboutMe;