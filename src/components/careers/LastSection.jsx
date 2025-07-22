import React from "react";
import "./Careers_Styles.css";
import logo from "../../assets/images/Logo.png";

export default function LastSection() {
  return (
    <div className="last_section">
      <div className="last_section_Top">
        <div className="last_section_Top_Left">
          <img src={logo} alt="logo" />
        </div>
        <div className="last_section_Top_Right">
          <p className="header_of_last_section_Top_Right">
            Today, SquareUp Continues to Thrive as a Leading Digital Product
            Agency.....{" "}
          </p>
          <p className="body_of_last_section_Top_Right">
            Combining the power of design, engineering, and project management
            to create transformative digital experiences. They invite you to
            join them on their journey and discover how they can help bring your
            digital ideas to life.
          </p>
        </div>
      </div>
      <div className="last_Section_Bottom">
        <div className="last_Section_Bottom_Left">
          <div className="last_Section_Bottom_Left_Text">
            <p>Welcome to SquareUp</p>
          </div>
          <div className="last_Section_Bottom_Left_Input">
            <p>
              Where collaboration, Expertise, and Client-Centricity Intersect to
              Shape the Future of Digital Innovation.{" "}
            </p>
          </div>
        </div>
        <div className="last_Section_Bottom_Right">
          <button>Start Project</button>
        </div>
      </div>
    </div>
  );
}
