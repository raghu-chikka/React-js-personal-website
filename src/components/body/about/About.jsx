import React from "react";
import Typical from "react-typical";
import Social from "../../common/SocialIcons";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello, There 👋
          <br />
          <span className="info-name">I'm Raghu Varma</span>
          <br />
          <div className="typical-info">
            <Typical
              steps={[
                " Techie 🖥️",
                1000,
                "Front-End Developer💻",
                1000,
                "React JS Developer⚛️",
                1000,
                "Bug Bounty Hunter🗔",
                1000,
              ]}
              loop={Infinity}
              wrapper="span"
            />
          </div>
          <div className="about-button">
            <a href="#contact" className="hire-me-button">
              Hire Me
            </a>
            <a
              className="get-resume-button"
              download="Raghu Varma.pdf"
              href={require("../../../assets/Raghu-C--Resume.pdf")}
            >
              <i class="fi-rr-cloud-download download-icon" /> Get Resume
            </a>
          </div>
        </div>
        <div className="about-photo">
          <img
            className="picture"
            src={require("../../../assets/coding.png")}
            alt="no internet conncetion"
          />
        </div>
      </div>
      <Social />
    </div>
  );
};

export default About;
