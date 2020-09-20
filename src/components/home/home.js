import React, {Fragment} from "react";
import "./home-style.css";
import vp_profile_image from "./vp-profile-image.jpg";
import AnchorTag from "../anchor-tag";

const Home = () => {
    const social_links = [
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
    ];
    const resume_details = {
        "css_class": "btn btn-success font-weight-bold shadow rounded",
        "href": "https://github.com/patelviralb/Resume/raw/master/Viral-Patel_Resume.pdf",
        "download": "Viral-Patel_Resume.pdf",
        "target": "_blank",
        "icon_class": "fas fa-cloud-download-alt mr-2",
        "content": "DOWNLOAD RESUME",
    };

    return (
        <Fragment>
            <a id="vp-home"></a>
            <div className="vp-home-background-image">
                <div className="vp-home-content">
                    <div className="container">
                        <div className="row mb-4">
                            <div className="d-flex justify-content-center col-md-4 offset-md-4 col-6 offset-3">
                                <img className="rounded-circle w-100 h-100" src={vp_profile_image}/>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="d-flex justify-content-center col-lg-4 offset-lg-4 col-10 offset-1">
                                <h2 className="vp-home-my-name text-white font-weight-bold">Viral Patel</h2>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="d-flex justify-content-center col-lg-4 offset-lg-4 col-12">
                                <h4 className="vp-home-my-position text-white font-weight-bold">Software Developer</h4>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="d-flex justify-content-center col-lg-4 offset-lg-4 col-12">
                                <h4 className="vp-home-my-education text-white font-weight-bold">
                                    MS - Computer Science
                                </h4>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="d-flex justify-content-center col-md-6 offset-md-3 col-12">
                                <AnchorTag params={resume_details}/>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="d-flex justify-content-center col-md-6 offset-md-3 col-12">
                                {
                                    social_links.map(eachObject => {
                                        return (
                                            <AnchorTag key={eachObject.href} params={eachObject}/>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Home