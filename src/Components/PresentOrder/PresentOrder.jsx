import { Button } from "react-bootstrap";
import "./PresentOrder.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faCircleXmark
 
} from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import { $Form } from "../../Store/Store";
  

  

export default function PresentOrder() {
  const[form,setform]=useRecoilState($Form)
  return (
    <div className="ContactUs col-12" >
      <div className="col-8 ContactInfo" style={{backgroundColor:"rgba(0, 0, 0, 0.600)"}}>
      <FontAwesomeIcon icon={faCircleXmark} className="closeForm" onClick={(e)=>setform(false)}/>
        <label className="label">
          الجهة المساهمة <span>*</span>
        </label>
        <label><input type="radio" value="مطعم"/>مطعم</label>
        
        <label><input type="radio" value="جمعية خيرية"  />جمعية خيرية</label>
        <label><input type="radio" value="متطوع"  />متطوع</label>
        <label className="label">
          البريد الإلكتروني <span>*</span>
        </label>
        <input type="email" placeholder="البريد الإلكتروني.........."></input>
        <label className="label">
          رقم التليفون <span>*</span>
        </label>
        <input type="email" placeholder=" رقم التليفون.........."></input>
        <Button variant="info">ارسال</Button>{" "}
      </div>
      <div></div>
    </div>
  );
}
