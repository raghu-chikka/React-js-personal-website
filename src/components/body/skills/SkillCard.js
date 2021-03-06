import React from "react";
import "./SkillCard.css";

const SkillCard = ({ skill }) => {
  return (
    <div className="skill-card">
      <div className="skill-icon">{skill.icons}</div>
      <label className="skill-name">{skill.name}</label>
    </div>
  );
};

export default SkillCard;
