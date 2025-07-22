import React from "react";
import JobCard from "./JobCard";
import "./Careers_Styles.css"


export default function JobSection({ section }) {
  return (
    <div id={section.id} className="section">
      <h2 className="title_Current_Opening_Card">{section.title}</h2>
      <div className="cardes_Container">
        {section.cards.map((card, idx) => (
          <JobCard key={idx} {...card} />
        ))}
      </div>
    </div>
  );
}
