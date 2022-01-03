import React from "react";
import "./Social.css";

const Social = () => {
  return (
    <div className="social-contact">
      <a href="https://www.linkedin.com/in/raghu-varma-c/">
        <div className="social-icon-div">
          <img
            className="social-icon"
            src="https://img.icons8.com/fluency/96/000000/linkedin.png"
          />
        </div>
      </a>
      <a href="https://github.com/raghu-chikka">
        <div className="social-icon-div">
          <img
            className="social-icon"
            src="https://img.icons8.com/fluency/96/000000/github.png"
          />
        </div>
      </a>
    </div>
  );
};

export default Social;
