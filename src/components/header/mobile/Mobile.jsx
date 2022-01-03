import React from "react";
import "./Mobile.css";

const Mobile = ({ isOpen, setIsOpen }) => {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <img src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png" />
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#project">
            <img
              className="option-icon"
              src="https://img.icons8.com/external-itim2101-lineal-itim2101/30/000000/external-project-management-project-management-itim2101-lineal-itim2101.png"
            />
            Project
          </a>
        </div>
        <div className="mobile-option">
          <a href="#skills">
            <img
              className="option-icon"
              src="https://img.icons8.com/ios-glyphs/25/000000/laptop.png"
            />
            Skills{" "}
          </a>
        </div>
        <div className="mobile-option">
          <a href="#work">
            <img
              className="option-icon"
              src="https://img.icons8.com/external-justicon-lineal-justicon/25/000000/external-suitcase-office-stationery-justicon-lineal-justicon.png"
            />
            Work{" "}
          </a>
        </div>
        <div className="mobile-option">
          <a href="#contact">
            <img
              className="option-icon"
              src="https://img.icons8.com/ios/25/000000/user--v1.png"
            />
            Contact{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
