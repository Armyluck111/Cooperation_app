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
      <img src="./assets/Images/6.png" className=" col-12 Main_img" />
      <div className="VolButton">
        <button class="btn btn-primary " type="button" onClick={(e)=>setform(true)} className="serviceButton">
          تطوع الآن
        </button>
        <button class="btn btn-primary " type="button" onClick={navigateToVolunteer} className="serviceButton"  >
          تبرع الآن
        </button>
      </div>
      <div className="col-11 Charity_Header ">
        <h1 className="col-12">الجمعيات المتاحة</h1>
      </div>
      <Charities/>
      <div className="col-11 Charity_Header ">
        <h1 className="col-12">المطاعم المساهمة</h1>
      </div>
      <Restaurants/>
      <Footer/>
    </div>
      {form ? <PresentOrder/> : ""}
     
  
    
      </>
  );
}
