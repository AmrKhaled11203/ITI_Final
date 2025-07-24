// src/components/FAQSection.jsx
import FAQCards from "./FAQCards";
import "./FAQStyles.css";
import bg from "../../assets/images/WhatsApp Image 2025-07-12 at 17.20.43_857a17b6.jpg"; // Adjust the path as necessary


const FAQSection = () => {
  return (
    <>
      <div className="FAQSection">
        <img
          src={bg}
          alt="Background"
          className="FAQSection-image"
        />
        <div className="text-overlay">
          <p className="main_Paragraph">Frequently Asked Questions</p>
          <p className="sub_Paragraph">
            Still you have any questions? Contact our Team via
            hello@squareup.com
          </p>
        </div>
      </div>
      <FAQCards />
    </>
  );
};

export default FAQSection;
