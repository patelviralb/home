import React from "react";

import "../about-me-style.css";

const AboutMeParagraph = (props) => {
    return (
        <div className="row mt-4 mb-4">
            <div className="col-12">
                <h4 className="text-justify vp-about-me-paragraph">{props.content}</h4>
            </div>
        </div>
    );
}

export default AboutMeParagraph;