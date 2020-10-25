import React, {Fragment} from "react";

import "./page-break-style.css";

const PageBreak = () => {
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="box mt-5 mb-5">
                            <div className="box-sm violet"/>
                            <div className="box-sm indigo"/>
                            <div className="box-sm blue"/>
                            <div className="box-sm green"/>
                            <div className="box-sm yellow"/>
                            <div className="box-sm orange"/>
                            <div className="box-sm red"/>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default PageBreak;