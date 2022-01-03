import React from "react";
import "./Contact.css";
import Separator from "../../common/Separator";
import Social from "../../common/SocialIcons";
import Mailer from "./Mailer";

const Contact = () => {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Do you like my work? Connect with me.</p>
          <Social />
          <a className="whatapp-icon" href="https://wa.me/+916305146372">
            Chat with me directly
            <img src="https://img.icons8.com/color/24/000000/whatsapp--v1.png" />
          </a>
        </div>
        <div className="download-button">
          <a
            download="Raghu Varma.pdf"
            href={require("../../../assets/Raghu-C--Resume.pdf")}
          >
            <i class="fi-rr-cloud-download download-icon" /> Get Resume
          </a>
        </div>
      </div>
      <p className="hire-info">
        Want to Hire Me? Submit this form I'll get back to you ASAP.
      </p>
      <Mailer />
    </div>
  );
};

export default Contact;
