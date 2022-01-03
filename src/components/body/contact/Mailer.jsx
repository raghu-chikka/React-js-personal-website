import React from "react";
import emailjs from "emailjs-com";
import "./Mailer.css";

const Mailer = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9k9uf14",
        "template_57sqiaf",
        e.target,
        "user_NIuI6ZSYG7bL0WfNC2cKc"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="form-control">
      <form onSubmit={sendEmail} autoComplete="off">
        <div className="form-inputs">
          <label>Name:</label>
          <input
            placeholder="Name"
            className="input-type"
            type="text"
            name="name"
          />
          <label>Email:</label>
          <input
            placeholder="Email"
            className="input-type"
            type="email"
            name="user_email"
          />
          <label>Message:</label>
          <textarea
            placeholder="Your Message. "
            className="input-type"
            name="message"
            rows="4"
          />
          <input className="submit-button" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Mailer;
