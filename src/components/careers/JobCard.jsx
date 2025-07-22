import React from "react";
import "./Careers_Styles.css"


export default function JobCard({ icon, title, description }) {
  return (
    <div className="card">
      <div className="card_Content">
        <img src={icon} alt="Job Icon" />
        <div className="content">
          <h3 className="title">{title}</h3>
          <p className="description">{description}</p>
        </div>
      </div>
      <button>Apply Now</button>
    </div>
  );
}
