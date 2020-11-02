import React, {Fragment} from "react";

import TechnologiesAndFrameworks from "./technologies-and-frameworks";
import {
    CenterAlignedContainer,
    TechnicalKnowledgeSubHeading,
} from "../styled/technical-knowledge";

const TechnologiesAndFramework = () => {
    return (
        <Fragment>
            <div className="row mt-4">
                <CenterAlignedContainer
                    className="col-md-10 offset-md-1 col-12">
                    <TechnicalKnowledgeSubHeading className="mt-5">
                        Technologies & Frameworks I've worked on
                    </TechnicalKnowledgeSubHeading>
                </CenterAlignedContainer>
            </div>
            <div className="row mt-4">
                <CenterAlignedContainer
                    className="col-md-10 offset-md-1 col-12">
                    <TechnologiesAndFrameworks/>
                </CenterAlignedContainer>
            </div>
        </Fragment>
    );
};

export default TechnologiesAndFramework;
