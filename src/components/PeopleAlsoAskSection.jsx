import React, { useState } from "react";
import "./PeopleAlsoAskSection.css";
import { FaAngleDown } from "react-icons/fa";
import { FaEllipsisV } from "react-icons/fa";

function PeopleAlsoAskSection({ data }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index, e, theme) => {
    e.preventDefault();
    e.stopPropagation();
    if (index === expandedIndex) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="people-also-ask">
      <div className="section-header">
        People also ask <FaEllipsisV className="vertical-dots-icon" />
      </div>
      <ul>
        {data.map((item, index) => (
          <li key={index} className="question-container">
            <div className="question" onClick={(e) => toggleAnswer(index, e)}>
              {item.question}
              <span
                className={`expand-icon ${
                  expandedIndex === index ? "expanded" : ""
                }`}
              >
                <FaAngleDown />
              </span>
            </div>
            {expandedIndex === index && (
              <div className="answer">
                {item.answer.split("\n").map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PeopleAlsoAskSection;
