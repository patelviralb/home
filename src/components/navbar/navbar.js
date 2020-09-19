import React from "react";

import Navlink from "./navlink";

const Navbar = () => {
    const navbarLinks = {
        "Home": "vp-home",
        /*"Profiles": "#vp-my-social-profiles",
        "Technical Knowledge": "#vp-my-technical-knowledge",
        "Work Experience": "#vp-my-work-experience",
        "Education": "#vp-my-education",
        "Testimonies": "#vp-my-testimonies",
        "Projects": "#vp-my-projects",*/
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-primary bg-primary fixed-top">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown">
                <i className="fas fa-bars text-white"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    {
                        Object.keys(navbarLinks).map(eachKey => {
                            return <Navlink key={eachKey} name={eachKey} href={navbarLinks[eachKey]} />
                        })
                    }
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;