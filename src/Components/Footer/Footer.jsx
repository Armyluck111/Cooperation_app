import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="col-12 Footer">
      <div className="AboutUs col-10 col-md-10 col-lg-3">
        <h1 className="col-12">ماذا عنا ؟</h1>
        <p className="col-12">
          {" "}
          نحن نقدم خدمات تسويقية للمطاعم وايضا نساهم في سهولة الربط بين هذه
          المطاعم والجمعيات الخيرية.
        </p>
        <div className="col-12 FooterIcons">
          <FontAwesomeIcon icon={faXTwitter} style={{ color: "black" }} className="AboutIcon" />
          <FontAwesomeIcon icon={faLinkedin} style={{ color: "blue" }} className="AboutIcon"/>
          <FontAwesomeIcon icon={faWhatsapp} style={{ color: "green" }} className="AboutIcon"/>
        </div>
      </div>
      <div className="lineDiv"></div>
      <div className="FooterImg">
        <img src="./assets/Images/2.png" className="Footer_Img col-10 col-md-10 col-lg-3" />
      </div>
      <div className="lineDiv"></div>
      <div className="Info col-10 col-md-10 col-lg-3">
        <h1 className="col-12">معلومات عنا</h1>
        <div className="col-12 InfoIcon">
          <FontAwesomeIcon icon={faLocationDot} className="InfoIcon"/>
          <p className="col-12">التجمع الخامس-التسعين الجنوبي</p>
        </div>
        <div className="col-12 InfoIcon">
          <FontAwesomeIcon icon={faPhone} className="InfoIcon"/>
          <p className="col-12">+201124367646</p>
        </div>
        <div className="col-12 InfoIcon">
          <FontAwesomeIcon icon={faEnvelope} className="InfoIcon"/>
          <p className="col-12">armyluck111@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
