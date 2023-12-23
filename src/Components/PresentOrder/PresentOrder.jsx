import { Button } from "react-bootstrap";
import "./PresentOrder.scss"
export default function PresentOrder() {
  return (
    <div className="ContactUs col-12">
      <div className="col-5 ContactInfo">
        <label className="label">
          الجهة المساهمة<span>*</span>
        </label>
        <label><input type="radio" value="مطعم"  />مطعم</label>
        
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
