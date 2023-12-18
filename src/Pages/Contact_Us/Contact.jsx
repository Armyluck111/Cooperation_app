import { Button } from "react-bootstrap";
import Nav from "../../Components/Nav/Nav";
import "./Contact.scss";
import Footer from "../../Components/Footer/Footer";
export default function Contact() {
  return (
    <>
      <Nav />
      <div className="ContactUs col-12">
        <div className="col-5 ContactInfo">
          <label className="label">
            الإسم <span>*</span>
          </label>
          <input type="email" placeholder="الإسم.........."></input>
          <label className="label">
            البريد الإلكتروني <span>*</span>
          </label>
          <input type="email" placeholder="البريد الإلكتروني.........."></input>
          <label className="label">
            الموضوع <span>*</span>
          </label>
          <input type="text" placeholder="الموضوع.........."></input>
          <label className="label">
            اترك رسالتك <span>*</span>
          </label>
          <textarea placeholder="اترك رسالتك.........."></textarea>
          <Button variant="info">ارسال</Button>{" "}
        </div>
        <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.4040590382597!2d31.47177187227128!3d30.025263764100842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458225f70b96f59%3A0x9257e3e4f07682bf!2sS%20Teseen%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1702753976124!5m2!1sen!2seg"
          width="100%"
          height="450"
          style={{border:"0"}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
         
        >
       
        </iframe>
        <Footer/>
        </div>
       
    
      </div>
    </>
  );
}
