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
import { useEffect, useState } from "react";
import TitleAnimation from "../../Components/Loader/TitleAnimation";
export default function Services() {
  const[form,setform]=useRecoilState($Form)
  const[Vol,setVol]=useRecoilState($VolunteerForm)
  const navigate=useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);
  if(loading){
    return<TitleAnimation/>
  }
  const navigateToVolunteer=()=>{
 navigate("/VolAnyCharity")
  };
 
  
    return (
      <>
      <div className="Services col-12" dir="rtl">
        <Nav />
        <div className="col-12 serviceImgAndButtons" dir="rtl">
        <img src="./assets/Images/6.png" className=" col-12 ServiceImg" />
        <div className="VolButton col-12">
          <button class="btn btn-primary " type="button" onClick={(e)=>setform(true)} className="serviceButton wow animate__animated animate__backInUp animate__fast">
            تطوع الآن
          </button>
          <button class="btn btn-primary " type="button" onClick={navigateToVolunteer} className="serviceButton wow animate__animated animate__backInUp animate__fast"  >
            تبرع الآن
          </button>
        </div>
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
 

