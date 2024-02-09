import "./Restaurants.scss"
import { useNavigate,Route,routes, Link } from "react-router-dom";

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
    <div className="col-12 restaurants" dir="rtl">
    {restaurants.map(function(restaurant){
      return(
        <div key={restaurant.id} className="col-5 col-md-3 col-lg-2 col-xl-2 restaurant wow animate__animated animate__backInRight animate__fast">
          <img src={restaurant.thumbnail} className="charityAndRestaurantImg"/>
          <div className="col-12 content_charity">
        <h2 className="col-12">{restaurant.title}</h2>
        <Link to={`/restaurants/${restaurant.id}`} className="link">المزيد من التفاصيل</Link>
      </div>
        </div>
      )
    })}
    </div>
   
    </>
  )  
}