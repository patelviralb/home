import React from "react";

import languageData from "../../../data/technical-knowledge/languages.json";

import {
  CppSvg,
  CSvg,
  JavaSvg,
  PythonSvg,
  ScalaSvg,
} from "../svg/technical-knowledge-svg";
import { Proficiency } from "../../styles/technical-knowledge";

const getSvg = (languageName) => {
  switch (languageName) {
    case "Java":
      return <JavaSvg />;
    case "C":
      return <CSvg />;
    case "C++":
      return <CppSvg />;
    case "Python":
      return <PythonSvg />;
    case "Scala":
      return <ScalaSvg />;
    default:
      return null;
  }
};

const getCssClasses = (index) => {
  let cssClasses = "col-12 col-md-6 col-lg-3";
  switch (index) {
    case 0:
      cssClasses += "";
      break;
    case 1:
      cssClasses += " mt-md-0 mt-4";
      break;
    case 2:
      cssClasses += " mt-lg-0 mt-4";
      break;
    case 3:
      cssClasses += " mt-lg-0 mt-4";
      break;
    default:
      cssClasses += " mt-4";
      break;
  }

  return cssClasses;
};

const TechnicalKnowledgeLanguages = () => {
  console.log(languageData.languages);
  return (
    <div className="container-fluid mt-4">
      <div className="row">
        {languageData.languages
          ? languageData.languages.map((language, index) => {
              const cssClasses = getCssClasses(index);

              return (
                <div className={cssClasses} key={index}>
                  <div className="card shadow rounded">
                    <div className="card-body text-justify">
                      <h5>
                        {getSvg(language.name)}
                        <span className="ml-2">{language.name}</span>
                      </h5>
                      <Proficiency>
                        Proficiency: {language.proficiency}
                      </Proficiency>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default TechnicalKnowledgeLanguages;
