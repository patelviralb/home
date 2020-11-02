import React from "react";

import vp_profile_image from "./vp-profile-image.jpg";
import {CenterAlignedContainer} from "../styled/home";

const ProfileImage = () => {
    return (
        <div className="row">
            <CenterAlignedContainer
                className="col-6 offset-3 col-md-4 offset-md-4">
                <img
                    className="rounded-circle"
                    src={vp_profile_image}
                    alt={`Hey there ! I'm Viral Patel`}
                />
            </CenterAlignedContainer>
        </div>
    );
};

export default ProfileImage;
