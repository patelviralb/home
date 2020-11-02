import React, {Fragment} from "react";

import {
    CenterAlignedContainer,
    Education,
    FontContainer,
    Name,
    Position,
} from "../styled/home";

const ProfileHeading = () => {
    return (
        <Fragment>
            <div className="row mb-4">
                <CenterAlignedContainer
                    className="col-10 offset-1 col-lg-4 offset-lg-4">
                    <FontContainer>
                        <Name>Hey there !</Name>
                    </FontContainer>
                </CenterAlignedContainer>
            </div>

            <div className="row mb-4">
                <CenterAlignedContainer
                    className="col-10 offset-1 col-lg-4 offset-lg-4">
                    <FontContainer>
                        <Name>I'm Viral Patel</Name>
                    </FontContainer>
                </CenterAlignedContainer>
            </div>

            <div className="row mb-4">
                <CenterAlignedContainer
                    className="col-10 offset-1 col-lg-4 offset-lg-4">
                    <FontContainer>
                        <Position>Software Engineer</Position>
                    </FontContainer>
                </CenterAlignedContainer>
                <CenterAlignedContainer
                    className="col-10 offset-1 col-lg-4 offset-lg-4">
                    <FontContainer>
                        <Education>MS Computer Science</Education>
                    </FontContainer>
                </CenterAlignedContainer>
            </div>
        </Fragment>
    );
};

export default ProfileHeading;
