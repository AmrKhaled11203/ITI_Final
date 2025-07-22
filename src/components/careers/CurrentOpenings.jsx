import React from "react";
import JobSection from "./JobSection";
import jobsData from "../../data/JobsData";
import "./Careers_Styles.css"


export default function CurrentOpenings() {
  return (
    <div className="current_Opening_Content" id="current_Opening_Content">
      <div className="title_Of_Current_Opening_Content">
        <p className="main_Title_Of_current_Opening">Current Opening</p>
        <p className="sub_Title_Of_current_Opening">
          We are always on the lookout for talented individuals...
        </p>
      </div>
      <div className="current_Opening_Card_Container" id="current_Opening_Card_Container">
        {jobsData.map((section, idx) => (
          <JobSection key={idx} section={section} />
        ))}
      </div>
    </div>
  );
}
