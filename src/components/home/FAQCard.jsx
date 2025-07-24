import "./FAQStyles.css";

const FAQCard = ({ item, isOpen, onClick }) => {
  return (
    <div className={`FAQcard${isOpen ? "Expanded" : ""}`}>
      <div className="FAQcard-image-question">
        <img src={item.questionNumber} alt="question icon" />
        <div className="FAQcard-content">
          <div
            className="FAQcard-question"
            onClick={onClick}
            style={{ cursor: "pointer" }}
          >
            {item.question}
          </div>
          <div
            className="FAQcard-answer"
            style={{ display: isOpen ? "block" : "none" }}
          >
            {item.answer}
          </div>
        </div>
      </div>
      <button
        className="toggle-button"
        onClick={onClick}
        aria-label={isOpen ? "Close" : "Open"}
      >
        {isOpen ? "×" : "+"}
      </button>
    </div>
  );
};

export default FAQCard;
