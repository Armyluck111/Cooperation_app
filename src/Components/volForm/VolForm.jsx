import "./VolForm.scss";
import { Button } from "react-bootstrap";
import Select from "react-select";
import Footer from "../Footer/Footer";
export default function VolForm() {
  const optionsCharities = [
    { value: "جمعية رسالة", label: "جمعية رسالة" },
    { value: "مؤسسة صناع الخير", label: "مؤسسة صناع الخير" },
    { value: "مستشفي شفا الأورمان", label: "مستشفي شفا الأورمان" },
    { value: "مصر الخير", label: "مصر الخير" },
    { value: "جمعية مرسال", label: "جمعية مرسال" },
    { value: "مؤسسة مجدي يعقوب", label: "مؤسسة مجدي يعقوب" },
    { value: "جمعية الهلال الأحمر", label: "جمعية الهلال الأحمر" },
    { value: "بنك الإطعام المصري", label: "بنك الإطعام المصري" },
  ];
  const optionsCountry = [
    { value: "مصر", label: "مصر" },
    { value: "السعودية", label: "السعودية" },
    { value: "الإمارات", label: "الإمارات" },
    { value: "الكويت", label: "الكويت" },
  ];
  return (
    <div className="ContactUs col-12">
      <div className="col-5 ContactInfo">
        <label className="label">
          جهة التبرع <span>*</span>
        </label>
        <Select options={optionsCharities} />
        <label className="label">
          البريد الإلكتروني <span>*</span>
        </label>
        <input type="email" placeholder="البريد الإلكتروني.........." ></input>
        <label className="label">
         البلد <span>*</span>
        </label>
        <Select options={optionsCountry} />
        <label className="label">
         رقم الهاتف <span>*</span>
        </label>
        <input type="text" placeholder="+(code) xxx-xxx-xxx" dir="ltr"></input>
        <label className="label">
    قيمة التبرع <span>*</span>
        </label>
        <input type="text" placeholder="قيمة التبرع........."></input>
        <label className="label">
   اختيار طريقة الدفع
        </label>
        <label>  <input type="radio" value="خصم من الرصيد" checked className="balanceRadio"/>خصم من الرصيد</label>
      
        <Button variant="info">تبرع</Button>{" "}
      </div>
      <img src="./assets/images/2.png" className="volImg"/>
      <Footer/>
    </div>
  );
}
