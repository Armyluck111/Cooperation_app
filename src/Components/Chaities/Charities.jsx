

import "./Charities.scss";
import { useNavigate,Route,routes } from "react-router-dom";





export default function Charities(props) {
  const navigate=useNavigate();
  const navigateToVolunteer=()=>{
 navigate("/VolAnyCharity")
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
      title: "مؤسسة صناع الخير",
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
      title: "بنك الإطعام المصري",
    },
  ];
 
  return (
    <>
    <div className="col-12 charities" dir="rtl" onClick={navigateToVolunteer}>
    {charities.map(function(single){
      return(
        <div key={single.id} className="col-2 charity">
          <img src={single.thumbnail} className="charityAndRestaurantImg"/>
          <div className="col-12 content_charity">
        <h2>{single.title}</h2>
      </div>
        </div>
      )
    })}
    </div>
   
    </>
  )  
}
