import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { WOW } from "wowjs";
import {
  faXTwitter,
  faLinkedin,
  faWhatsapp,
  
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faPhone,
 
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    const wow = new WOW({ live: false });
    wow.init();
  });
  return (
    <div className="col-12 Footer">
      <div className="AboutUs col-10 col-md-10 col-lg-3 wow animate__animated animate__backInRight animate__fast">
        <h1 className="col-12">ماذا عنا ؟</h1>
        <p className="col-12">
          {" "}
          نحن نقدم خدمات تسويقية للمطاعم وايضا نساهم في سهولة الربط بين هذه
          المطاعم والجمعيات الخيرية.
        </p>
        <div className="col-12 FooterIcons">
          <a href="https://twitter.com/YourTwitterUsername"  target="_blank"><FontAwesomeIcon icon={faXTwitter} style={{ color: "black" }} className="AboutIcon" /></a>
          <a href="https://www.linkedin.com/in/ahmed-adel-154b0a255"  target="_blank"><FontAwesomeIcon icon={faLinkedin} style={{ color: "blue" }} className="AboutIcon"/></a>
         <a href="https://wa.me/+201124367646?text=Hello%20from%20my%20website"  target="_blank"> <FontAwesomeIcon icon={faWhatsapp} style={{ color: "green" }} className="AboutIcon"/></a>
         <a href="mailto:your.ahmedadel25828@gmail.com?subject=Subject%20of%20the%20email&body=Hello%20from%20my%20website" target="_blank"><FontAwesomeIcon icon={faEnvelope} className="AboutIcon" /></a>
        </div>
      </div>
      <div className="lineDiv"></div>
      <div className="FooterImg wow animate__animated animate__backInRight animate__fast">
        <img src="./assets/Images/2.png" className="Footer_Img col-10 col-md-10 col-lg-3" />
      </div>
      <div className="lineDiv"></div>
      <div className="Info col-10 col-md-10 col-lg-3 wow animate__animated animate__backInRight animate__fast">
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
