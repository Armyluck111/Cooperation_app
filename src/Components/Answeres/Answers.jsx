
import "./Answers.scss";

export default function Answers(props) {
  return (
    <>
    <div className="col-12 Questions">
      <h3 className="col-12">{props.question}</h3>
      <p className="col-12">{props.answer}</p>
    </div>
 
    </>
  );
}
