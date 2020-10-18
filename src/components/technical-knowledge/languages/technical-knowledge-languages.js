import React from "react";
import {CppSvg, CSvg, JavaSvg, PythonSvg} from "../svg/technical-knowledge-svg";

const createLanguageCard = (language) => {
    let languageProficiency;
    let languageSvgComponent;

    if (language === "Java") {
        languageProficiency = "Intermediate";
        languageSvgComponent=<JavaSvg/>;
    } else if (language === "C") {
        languageProficiency = "Intermediate";
        languageSvgComponent=<CSvg/>;
    } else if (language === "C++") {
        languageProficiency = "Novice";
        languageSvgComponent=<CppSvg/>;
    } else if (language === "Python") {
        languageProficiency = "Beginner";
        languageSvgComponent=<PythonSvg/>;
    }

    return (
        <div className="card-body text-justify">
            <h5>
                {languageSvgComponent}
                <span className="ml-2">{language}</span>
            </h5>
            <span className="vp-languages-proficiency">
                Proficiency: {languageProficiency}
            </span>
        </div>
    );
}


const TechnicalKnowledgeLanguages = () => {
    return (
        <div className="container-fluid ml-n3 mt-4">
            <div className="row">

                <div className="col-12 col-md-6 col-lg-3">
                    <div className="card shadow rounded">
                        {createLanguageCard("Java")}
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mt-md-0 mt-4">
                    <div className="card shadow rounded">
                        {createLanguageCard("C")}
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mt-4 mt-lg-0">
                    <div className="card shadow rounded">
                        {createLanguageCard("C++")}
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mt-4 mt-lg-0">
                    <div className="card shadow rounded">
                        {createLanguageCard("Python")}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default TechnicalKnowledgeLanguages;