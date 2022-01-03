import React from "react";
import Separator from "../../common/Separator";
import "./Work.css";
import WorkCard from "./WorkCard";
import { WorkData } from "./WorkData";

const Work = () => {
  const data = WorkData;
  return (
    <div className="work">
      <Separator />
      <label className="section-title"> Work</label>
      <div className="work-list">
        {data.map((item) => {
          return <WorkCard item={item} />;
        })}
      </div>
    </div>
  );
};

export default Work;
