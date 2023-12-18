
import "./Charities.scss";
export default function Charities(props) {
  return (
    <div className="Carities col-3">
    <div className="charity">
      <img src={props.img}/>
      <div className="col-12 content_charity">
        <h2>{props.title}</h2>
      </div>
    </div>
    </div>
  );
}
