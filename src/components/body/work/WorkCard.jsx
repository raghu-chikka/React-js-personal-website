import React from "react";
import "./WorkCard.css";

const WorkCard = ({ item }) => {
  return (
    <div className="work-card">
      <img src={item.companyLogo} className="work-logo" />
      <div className="work-info">
        <label className="company-name">{item.company}</label>
        <label className="company-designation">{item.designation}</label>
        <div className="work-dates">
          <label>{item.dataJoining}</label> to <label>{item.dateEnd}</label>
        </div>
        <div className="work-desc">
          <p>{item.work}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
