import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Navbar from "../navbar";
import Home from "../home";

const Portfolio = () => {
    return (
        <React.Fragment>
            <Navbar/>
            <Home />
        </React.Fragment>
    );
}

export default Portfolio;