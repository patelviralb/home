import React, {useState} from "react";

import Navlink from "./navlink";

const Navbar = () => {
    const navbarLinks = {
        Home: "#vp-home",
        About: "#vp-about-me",
        "Technical Knowledge": "#vp-my-technical-knowledge",
        /*"Profiles": "#vp-my-social-profiles",
            "Work Experience": "#vp-my-work-experience",
            "Education": "#vp-my-education",
            "Testimonies": "#vp-my-testimonies",
            "Projects": "#vp-my-projects",*/
    };

    const [bgColor, setBgColor] = useState("");

    React.useEffect(() => {
        const listenScrollEvent = () => {
            HandleNavbarColorChangeEvents();
        };

        const listenResizeEvent = () => {
            HandleNavbarColorChangeEvents();
        };

        const HandleNavbarColorChangeEvents = () => {
            const navbarExpansionButton = document.getElementById(
                "vp-navbar-expand-button"
            );
            const navbarButtonVisibility = window.getComputedStyle(
                navbarExpansionButton
            ).display;

            if (window.pageYOffset > 500 || navbarButtonVisibility !== "none") {
                setBgColor("bg-primary");
            } else {
                setBgColor("");
            }
        };

        window.addEventListener("scroll", listenScrollEvent);
        window.addEventListener("resize", listenResizeEvent);
        HandleNavbarColorChangeEvents();

        return () => {
            window.removeEventListener("scroll");
            window.removeEventListener("resize");
        };
    }, []);

    return (
        <nav
            className={`navbar navbar-expand-lg navbar-primary fixed-top ${bgColor}`}
        >
            <button
                id="vp-navbar-expand-button"
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
            >
                <i id="vp-navbar-button-icon"
                   className="fas fa-bars text-white"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    {Object.keys(navbarLinks).map((eachKey) => {
                        return (
                            <Navlink
                                key={eachKey}
                                name={eachKey}
                                href={navbarLinks[eachKey]}
                            />
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
