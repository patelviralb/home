import React, {Fragment} from "react";

import "./about-me-style.css";
import AboutMeParagraph from "./about-me-paragraph";
import PageBreak from "../page-break";

const AboutMe = () => {
    const about_me_content = [
        "Hello, I'm Viral Patel! Currently I am a Computer Science Graduate Student at Northeastern University, Boston.",

        "Before commencing a graduate degree, I was working for Infosys Ltd. and Prolifics in India since 2014. " +
        "My 5 years of work experience working with EDI and gateway team has helped me grow my skills in team " +
        "collaboration, verbal communication, and project leadership. Along with these skills, I also have domain " +
        "knowledge of the healthcare insurance industry that I gained from projects I worked on.",

        "I am interested in learning and working on Cloud Computing. The change of perspective in designing " +
        "applications and systems from central architecture to purely cloud-based distributed architecture is what " +
        "excites me. Along with Cloud Computing, I am also interested in the field of Artificial intelligence and " +
        "Machine Learning Applications along with web technologies and how I can put all these pieces together to " +
        "create software systems or product which can help people or an organization in their day-to-day life.",

        "When I am not working, you'll find me casually reading books, surfing articles on the internet or watching " +
        "some cartoons, sci-fi series or movies and I like to call it my passive learning.",
    ];

    return (
        <Fragment>
            <a id="vp-about-me"></a>
            <div className="mt-5">
                <div className="container">
                    <div className="row mt-5 mb-5">
                        <div className="col-12">
                            <h1 className="text-justify vp-about-me-heading">
                                About
                            </h1>
                        </div>
                    </div>
                    {
                        about_me_content.map(eachParagraph => {
                            return (
                                <AboutMeParagraph content={eachParagraph}/>
                            );
                        })
                    }
                </div>
            </div>
            <PageBreak/>
        </Fragment>
    );
}

export default AboutMe;