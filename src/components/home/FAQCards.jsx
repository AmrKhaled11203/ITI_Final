// src/components/FAQCards.jsx
import { useState } from "react";
import FAQ_Section_Content from "../../data/faqData";
import FAQCard from "./FAQCard";
import "./FAQStyles.css";

const FAQCards = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const leftColumn = FAQ_Section_Content.slice(0, 4);
  const rightColumn = FAQ_Section_Content.slice(4);

  return (
    <div className="FAQcards" id="FAQcards">
      <div className="column">
        {leftColumn.map((item, index) => (
          <FAQCard
            key={index}
            item={item}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
      <div className="column">
        {rightColumn.map((item, index) => (
          <FAQCard
            key={index + 4}
            item={item}
            isOpen={openIndex === index + 4}
            onClick={() => handleToggle(index + 4)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQCards;
