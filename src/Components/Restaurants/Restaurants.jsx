import "./Restaurants.scss"
import { useNavigate,Route,routes } from "react-router-dom";

export default function Restaurants(props) {
  const navigate=useNavigate();
  const navigateToRestaurant=()=>{
    navigate("/VolWithFood");
  }
  const restaurants=[
    {
      id:1,
      thumbnail: "assets/Images/Qasr.jpg",
      title: "قصر الكبابجي",
    },
    {
      id:2,
      thumbnail: "assets/Images/Karam.jpeg",
      title: "كرم الشام",
    },
    {
      id:3,
      thumbnail: "assets/Images/Gad.jpg",
      title: "جاد",
    },
    {
      id:4,
      thumbnail: "assets/Images/Dahan.jpeg",
      title: "الدهان",
    },
    {
      id:5,
      thumbnail: "assets/Images/AboTarek.jpeg",
      title: "ابو طارق",
    },
   
  ]
  return (
    <>
    <div className="col-12 restaurants" dir="rtl" onClick={navigateToRestaurant}>
    {restaurants.map(function(single){
      return(
        <div key={single.id} className="col-2 restaurant">
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