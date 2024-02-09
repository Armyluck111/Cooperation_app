import "./Answers.scss";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Answers(props) {
  const [appear, setAppear] = useState(false);
  const handleDivClick = () => {
    setAppear(!appear); // Toggle between true and false
  };
  return (
    <>
      <div className="col-12 Questions ">
        <div
          className="col-12 quesionWithIcon  wow animate__animated animate__backInRight animate__fast"
          onClick={handleDivClick}
        >
          <h4>{props.question}</h4>
          <span>
            {" "}
            <FontAwesomeIcon icon={faCaretDown} className="QuestionIcon" />
          </span>
        </div>
        {appear ? <p className="col-12 Answer">{props.answer}</p> : ""}
      </div>
    </>
  );
}
