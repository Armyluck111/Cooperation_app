

import "./Charities.scss";
import { useNavigate,Route,routes } from "react-router-dom";



export default function Charities(props) {
  const navigate=useNavigate();
  const navigateToVolunteer=()=>{
 navigate("/VolAnyCharity")
  };
 
  return (
    <>
    <div className="Carities col-3">
    <div className="charity" onClick={navigateToVolunteer}   >
      <img src={props.img}/>
      <div className="col-12 content_charity">
        <h2>{props.title}</h2>
      </div>
    </div>
    </div>
  
    </>
  );
}
