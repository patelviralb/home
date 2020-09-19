import React from "react";

const Navlink = (props) => {
    return (
        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <a className="nav-link text-white" data-target={props.href} href="#">{props.name}</a>
        </li>
    );
}

export default Navlink;