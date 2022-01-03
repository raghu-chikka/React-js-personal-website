import React from "react";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  return (
    <div className="footer">
      <div>
        Made with 💜 & Passion by Raghu Varma
        <br />
      </div>
      <p className="ptag">
        {" "}
        Copyright © {today.getFullYear()}. All rights reserved.
      </p>
      <a href="#" className="back-to-top">
        Scroll Up
      </a>
    </div>
  );
};

export default Footer;
