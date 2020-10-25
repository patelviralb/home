import React, {Fragment} from "react";

import AnchorTag from "../anchor-tag";

import "./home-style.css";
import vp_profile_image from "./vp-profile-image.jpg";

const getDataForScreenSizeGreaterThanSmall = () => {
    return (
        <div className="d-none d-md-block">
            <div className="row mb-4">
                <div
                    className="d-flex justify-content-center col-lg-4 offset-lg-4 col-10 offset-1">
                    <span className="vp-home-my-name">Hey there !</span>
                </div>
            </div>
            <div className="row mb-4">
                <div
                    className="d-flex justify-content-center col-lg-4 offset-lg-4 col-10 offset-1">
                    <span className="vp-home-my-name">I'm Viral Patel</span>
                </div>
            </div>
            <div className="row mb-4">
                <div
                    className="d-flex justify-content-center col-lg-6 offset-lg-3 col-12">
                    <span className="vp-home-my-position">Software Developer & Designer</span>
                </div>
            </div>
        </div>
    );
}

const getDataForScreenSizeSmallerThanMedium = () => {
    return (
        <div className="d-bock d-md-none">
            <div className="row mb-4">
                <div className="d-flex justify-content-center col-10 offset-1">
                    <span className="vp-home-my-name-small">Hey there !</span>
                </div>
            </div>
            <div className="row mb-4">
                <div className="d-flex justify-content-center col-10 offset-1">
                    <span
                        className="vp-home-my-name-small">I'm Viral Patel</span>
                </div>
            </div>
            <div className="row mb-4">
                <div className="d-flex justify-content-center col-12">
                    <span className="vp-home-my-position-small">Software Developer & Designer</span>
                </div>
            </div>
        </div>
    );
}

const Home = () => {
    /*const social_links = [
        {
            "css_class": "mui-btn mui-btn--fab mui-btn--primary",
            "href": "https://www.linkedin.com/in/patelviralb",
            "target": "_blank",
            "icon_class": "fab fa-linkedin fa-lg",
        },
        {
            "css_class": "mui-btn mui-btn--fab mui-btn--primary",
            "href": "https://www.github.com/patelviralb",
            "target": "_blank",
            "icon_class": "fab fa-github fa-lg",
        },
        {
            "css_class": "mui-btn mui-btn--fab mui-btn--primary",
            "href": "https://www.facebook.com/viral22/",
            "target": "_blank",
            "icon_class": "fab fa-facebook fa-lg",
        },
        {
            "css_class": "mui-btn mui-btn--fab mui-btn--primary",
            "href": "https://twitter.com/pviralb",
            "target": "_blank",
            "icon_class": "fab fa-twitter fa-lg",
        },
    ];*/

    const resume_details = {
        "css_class": "btn btn-success font-weight-bold shadow rounded text-decoration-none",
        "href": "https://github.com/patelviralb/Resume/raw/master/Viral-Patel_Resume.pdf",
        "download": "Viral-Patel_Resume.pdf",
        "target": "_blank",
        "icon_class": "fas fa-cloud-download-alt mr-2",
        "content": "DOWNLOAD RESUME",
    };

    return (
        <Fragment>
            <div id="vp-home" />
            <div className="vp-home-background-image">
                <div className="vp-home-content">
                    <div className="container">
                        <div className="row mb-4">
                            <div
                                className="d-flex justify-content-center col-md-4 offset-md-4 col-6 offset-3">
                                <img className="rounded-circle w-100 h-100"
                                     src={vp_profile_image}
                                     alt="Hey there ! I'm Viral Patel"/>
                            </div>
                        </div>

                        {getDataForScreenSizeGreaterThanSmall()}
                        {getDataForScreenSizeSmallerThanMedium()}

                        <div className="row mb-4">
                            <div
                                className="d-flex justify-content-center col-md-6 offset-md-3 col-12">
                                <AnchorTag params={resume_details}/>
                            </div>
                        </div>
                        {/*<div className="row mb-4">
                            <div className="d-flex justify-content-center col-md-6 offset-md-3 col-12">
                                {
                                    social_links.map(eachObject => {
                                        return (
                                            <AnchorTag key={eachObject.href} params={eachObject}/>
                                        );
                                    })
                                }
                            </div>
                        </div>*/}
                        <div id="vp-about-me"/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Home
