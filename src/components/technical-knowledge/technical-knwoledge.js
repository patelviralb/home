import React, {Fragment} from "react";

import Languages from "./languages";
import TechnologiesAndFrameworks from "./technologies-and-frameworks";

import "./technical-knowledge-style.css";
import PageBreak from "../page-break";

const TechnicalKnowledge = () => {
    return (
        <Fragment>
            <div id="vp-my-technical-knowledge"/>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-10 offset-md-1 col-12">
                        <h1 className="vp-technical-knowledge-heading">
                            Technical Knowledge
                        </h1>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-10 offset-md-1 col-12">
                        <h4 className="vp-technical-knowledge-sub-heading">
                            Programming Languages
                        </h4>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-10 offset-md-1 col-12">
                        <Languages/>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-md-10 offset-md-1 col-12">
                        <h4 className="vp-technical-knowledge-sub-heading">
                            Technologies & Frameworks I've worked on
                        </h4>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-10 offset-md-1 col-12">
                        <TechnologiesAndFrameworks/>
                    </div>
                </div>

            </div>
            <div className="mb-5"/>
            <PageBreak/>
        </Fragment>
    );
};

export default TechnicalKnowledge;
