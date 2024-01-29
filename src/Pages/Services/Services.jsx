import Nav from "../../Components/Nav/Nav";
import Charities from "../../Components/Chaities/Charities";
import "./Services.scss"
import Restaurants from "../../Components/Restaurants/Restaurants";
import Footer from "../../Components/Footer/Footer";
import { useRecoilState } from "recoil";
import PresentOrder from "../../Components/PresentOrder/PresentOrder";
import { $Form, $VolunteerForm } from "../../Store/Store";
import Volunteer from "../../Components/Volunteer/Volunteer";
import { useNavigate,Route,routes } from "react-router-dom";
export default function Services() {
  const[form,setform]=useRecoilState($Form)
  const[Vol,setVol]=useRecoilState($VolunteerForm)
  const navigate=useNavigate();
  const navigateToVolunteer=()=>{
 navigate("/VolAnyCharity")
  };
  return (
    <>
    <div className="Services col-12">
      <Nav />
      <img src="./assets/Images/8.png" className=" col-12 Main_img" />
      <div className="VolButton">
        <button class="btn btn-primary " type="button" onClick={(e)=>setform(true)}>
          تطوع الآن
        </button>
        <button class="btn btn-primary " type="button" onClick={navigateToVolunteer}  >
          تبرع الآن
        </button>
      </div>
      <div className="col-11 Charity_Header ">
        <h1 className="col-12">الجمعيات المتاحة</h1>
      </div>
      <Charities  img="assets/Images/resala.jpg" title="جمعية رسالة"/>
      <Charities  img="assets/Images/Soonaa.png" title="مؤسسة صناع الخير"/>
      <Charities  img="assets/Images/Shfaa_Elorman.jpeg" title="مستشفي شفا الأورمان"/>
      <Charities img="assets/Images/misr-el-kheir_.jpg" title="مؤسسة مصر الخير"/>
      <Charities img="assets/Images/mersal.png" title="جمعية مرسال"/>
      <Charities img="assets/Images/Magdy.png" title="مؤسسة مجدي يعقوب"/>
      <Charities img="assets/Images/Helal.png" title="جمعية الهلال الأحمر "/>
      <Charities img="assets/Images/Bank.jpg" title="بنك الاطعام المصري" />
      <div className="col-11 restaurant_Header ">
        <h1 className="col-12">المطاعم المساهمة</h1>
      </div>
      <Restaurants img="assets/Images/Qasr.jpg" title="قصر الكبابجي"/>
      <Restaurants img="assets/Images/Karam.jpeg" title="كرم الشام"/>
      <Restaurants img="assets/Images/Gad.jpg" title="جاد"/>
      <Restaurants img="assets/Images/Dahan.jpeg" title="الدهان"/>
      <Restaurants img="assets/Images/AboTarek.jpeg" title="ابو طارق"/>
      <Footer/>
    </div>
      {form ? <PresentOrder/> : ""}
     
  
    
      </>
  );
}
