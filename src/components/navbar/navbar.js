import React, {useState} from "react";

import Navlink from "./navlink";

const Navbar = () => {
    const navbarLinks = {
        "Home": "#vp-home",
        "About": "#vp-about-me",
        /*"Profiles": "#vp-my-social-profiles",
        "Technical Knowledge": "#vp-my-technical-knowledge",
        "Work Experience": "#vp-my-work-experience",
        "Education": "#vp-my-education",
        "Testimonies": "#vp-my-testimonies",
        "Projects": "#vp-my-projects",*/
    };

    const [bgColor, setBgColor] = useState("");

    const listenScrollEvent = e => {
        if (window.scrollY > 500) {
            setBgColor("bg-primary")
        } else {
            setBgColor("")
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg navbar-primary fixed-top ${bgColor}`}>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown">
                <i className="fas fa-bars text-white"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    {
                        Object.keys(navbarLinks).map(eachKey => {
                            return <Navlink key={eachKey} name={eachKey} href={navbarLinks[eachKey]}/>
                        })
                    }
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;