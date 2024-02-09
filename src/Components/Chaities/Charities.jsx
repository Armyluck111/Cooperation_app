

import "./Charities.scss";
import { useNavigate,Route,routes, Link } from "react-router-dom";





export default function Charities(props) {
  const navigate=useNavigate();
  const navigateToVolunteer=()=>{
 navigate("/VolAnyCharity")
  };
  const navigateToInfoCharity=()=>{
    navigate("/InfoCharity")
     };
  const charities = [
    {
      id: 1,
      thumbnail: "assets/Images/resala.jpg",
      title: "جمعية رسالة",
    },
    {
      id: 2,
      thumbnail: "assets/Images/Soonaa.png",
      title: "مؤسسة صناع الحياة",
    },
    {
      id: 3,
      thumbnail: "assets/Images/Shfaa_Elorman.jpeg",
      title: "مستشفي شفاء الأورمان",
    },
    {
      id: 4,
      thumbnail: "assets/Images/misr-el-kheir_.jpg",
      title: "مؤسسة مصر الخير",
    },
    {
      id: 5,
      thumbnail: "assets/Images/mersal.png",
      title: "جمعية مرسال",
    },
    {
      id: 6,
      thumbnail: "assets/Images/Magdy.png",
      title: "مؤسسة مجدي يعقوب",
    },
    {
      id: 7,
      thumbnail: "assets/Images/Helal.png",
      title: "جمعية الهلال الأحمر",
    },
    {
      id:8,
      thumbnail: "assets/Images/Bank.jpg",
      title: "بنك الطعام المصري",
    },
  ];
 
  return (
    <>
    <div className="col-12 charities" dir="rtl">
    {charities.map(function(charity){
      return(
        <div key={charity.id} className="col-5 col-md-3 col-lg-2 col-xl-2 charity wow animate__animated animate__backInRight animate__fast">
          <img src={charity.thumbnail} className="charityAndRestaurantImg"/>
          <div className="col-12 content_charity">
        <h2 className="col-12">{charity.title}</h2>
        <Link to={`/charities/${charity.id}`} className="link">المزيد من التفاصيل</Link>
      </div>
      
        </div>
      )
    })}
    </div>
   
    </>
  )  
}
