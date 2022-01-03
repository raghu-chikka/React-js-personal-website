import React from "react";
import "./Web.css";

const Web = () => {
  return (
    <div className="web">
      <div className="web-options">
        <a href="#projects">
          <img
            className="option-icon"
            src="https://img.icons8.com/external-itim2101-lineal-itim2101/25/000000/external-project-management-project-management-itim2101-lineal-itim2101.png"
          />
          Project
        </a>
      </div>
      <div className="web-options">
        <a href="#skills">
          <img
            className="option-icon"
            src="https://img.icons8.com/ios-glyphs/25/000000/laptop.png"
          />
          Skills{" "}
        </a>
      </div>
      <div className="web-options">
        <a href="#work">
          <img
            className="option-icon"
            src="https://img.icons8.com/external-justicon-lineal-justicon/22/000000/external-suitcase-office-stationery-justicon-lineal-justicon.png"
          />
          Work{" "}
        </a>
      </div>
      <div className="web-options">
        <a href="#contact">
          <img
            className="option-icon"
            src="https://img.icons8.com/ios/24/000000/user--v1.png"
          />
          Contact{" "}
        </a>
      </div>
    </div>
  );
};

export default Web;
