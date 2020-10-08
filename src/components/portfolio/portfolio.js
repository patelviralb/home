import React, {Fragment} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Navbar from "../navbar";
import Home from "../home";
import AboutMe from "../about-me";

const Portfolio = () => {
    return (
        <Fragment>
            <Navbar/>
            <Home/>
            <AboutMe/>
        </Fragment>
    );
}

export default Portfolio;