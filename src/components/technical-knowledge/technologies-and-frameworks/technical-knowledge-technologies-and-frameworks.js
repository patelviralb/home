import React from "react";

import {GitVCS, ReactJs, Redux, Angular, NodeJs, JavaScript, JQuery, MongoDB, MySQL, IBMSvg} from "../svg/technical-knowledge-svg";

const createTechnologiesAndFrameworkCard = (input) => {
    let technologyAndFrameworkProficiency;
    let technologyAndFrameworkSvgComponent;

    if (input === "Git VCS") {
        technologyAndFrameworkProficiency = "Advanced";
        technologyAndFrameworkSvgComponent = <GitVCS/>;
    } else if (input === "React.js") {
        technologyAndFrameworkProficiency = "Intermediate";
        technologyAndFrameworkSvgComponent = <ReactJs/>;
    } else if (input === "Redux") {
        technologyAndFrameworkProficiency = "Intermediate";
        technologyAndFrameworkSvgComponent = <Redux/>;
    } else if (input === "Angular") {
        technologyAndFrameworkProficiency = "Beginner";
        technologyAndFrameworkSvgComponent = <Angular/>;
    } else if (input === "Node.js") {
        technologyAndFrameworkProficiency = "Novice";
        technologyAndFrameworkSvgComponent = <NodeJs/>;
    } else if (input === "JavaScript") {
        technologyAndFrameworkProficiency = "Novice";
        technologyAndFrameworkSvgComponent = <JavaScript/>;
    } else if (input === "jQuery") {
        technologyAndFrameworkProficiency = "Beginner";
        technologyAndFrameworkSvgComponent = <JQuery/>;
    } else if (input === "MongoDB") {
        technologyAndFrameworkProficiency = "Beginner";
        technologyAndFrameworkSvgComponent = <MongoDB/>;
    } else if (input === "MySQL") {
        technologyAndFrameworkProficiency = "Intermediate";
        technologyAndFrameworkSvgComponent = <MySQL/>;
    } else if (input === "IBM WTX (v8.4.0.3)") {
        technologyAndFrameworkProficiency = "Advanced";
        technologyAndFrameworkSvgComponent = <IBMSvg/>;
    } else if (input === "IBM ITX (v9.0)") {
        technologyAndFrameworkProficiency = "Intermediate";
        technologyAndFrameworkSvgComponent = <IBMSvg/>;
    }

    return (
        <div className="card-body text-justify">
            <h5>
                {technologyAndFrameworkSvgComponent}
                <span className="ml-2">{input}</span>
            </h5>
            <span className="vp-languages-proficiency">
                Proficiency: {technologyAndFrameworkProficiency}
            </span>
        </div>
    );
}

const TechnicalKnowledgeTechnologiesAndFrameworks = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="offset-2 col-8 offset-md-0 col-md-6 col-lg-3">
          <div className="card shadow-lg rounded">{createTechnologiesAndFrameworkCard("Git VCS")}</div>
        </div>
        <div className="offset-2 col-8 offset-md-0 col-md-6 col-lg-3 mt-md-0 mt-4">
          <div className="card shadow-lg rounded">{createTechnologiesAndFrameworkCard("React.js")}</div>
        </div>
        <div className="offset-2 col-8 offset-md-0 col-md-6 col-lg-3 mt-lg-0 mt-4">
          <div className="card shadow-lg rounded">{createTechnologiesAndFrameworkCard("Redux")}</div>
        </div>
        <div className="offset-2 col-8 offset-md-0 col-md-6 col-lg-3 mt-lg-0 mt-4">
          <div className="card shadow-lg rounded">{createTechnologiesAndFrameworkCard("Angular")}</div>
        </div>
        <div className="offset-2 col-8 offset-md-0 col-md-6 col-lg-3 mt-4">
          <div className="card shadow-lg rounded">{createTechnologiesAndFrameworkCard("Node.js")}</div>
        </div>
        <div className="offset-2 col-8 offset-md-0 col-md-6 col-lg-3 mt-4">
          <div className="card shadow-lg rounded">{createTechnologiesAndFrameworkCard("JavaScript")}</div>
        </div>
        <div className="offset-2 col-8 offset-md-0 col-md-6 col-lg-3 mt-4">
          <div className="card shadow-lg rounded">{createTechnologiesAndFrameworkCard("jQuery")}</div>
        </div>
        <div className="offset-2 col-8 offset-md-0 col-md-6 col-lg-3 mt-4">
          <div className="card shadow-lg rounded">{createTechnologiesAndFrameworkCard("MongoDB")}</div>
        </div>
        <div className="offset-2 col-8 offset-md-0 col-md-6 col-lg-3 mt-4">
          <div className="card shadow-lg rounded">{createTechnologiesAndFrameworkCard("MySQL")}</div>
        </div>
        <div className="offset-2 col-8 offset-md-0 col-md-6 col-lg-3 mt-4">
          <div className="card shadow-lg rounded">
          {createTechnologiesAndFrameworkCard("IBM ITX (v9.0)")}
          </div>
        </div>
        <div className="offset-2 col-8 offset-md-3 offset-lg-0 col-md-6 col-lg-3 mt-4">
          <div className="card shadow-lg rounded">{createTechnologiesAndFrameworkCard("IBM WTX (v8.4.0.3)")}</div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalKnowledgeTechnologiesAndFrameworks;
