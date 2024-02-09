import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

import "./InfoRestaurant.scss";

export default function InfoRestaurant() {
  const navigate = useNavigate();
  const navigateToAllCharities = () => {
    navigate("/Services");
  };

  const navigateToVolAnyCharity = () => {
    navigate("/VolAnyCharity");
  };
  const navigateToVolWithFood = () => {
    navigate("/VolWithfood");
  };
  const { restaurantId } = useParams();
  const restaurants=[
    {
      id:1,
      thumbnail: "/assets/Images/Qasr.jpg",
      title: "قصر الكبابجي",
      summery:"مطعم قصر الكبابجي هو وجهة رائعة لمحبي المأكولات الشرقية والمشويات في مصر. تأسس المطعم في عام 2009 في مدينة كفر الزيات، ويعتبر من أشهر مطاعم المشويات في مصر. يقدم المطعم مجموعة متنوعة من أصناف الطعام, يمكنك العثور على فروع مطعم قصر الكبابجي في مناطق مختلفة في مصر، بما في ذلك التجمع الخامس والشيخ زايد والساحل الشمالي، وقريبًا في العاصمة الإدارية",
      link:"https://ar-ar.facebook.com/Elkbabgi/"
    },
    {
      id:2,
      thumbnail: "/assets/Images/Karam.jpeg",
      title: "كرم الشام",
      summery:" مطعم كرم الشام هو وجهة رائعة لمحبي المأكولات الشامية في مصر. يقدم المطعم تشكيلة متنوعة من الأطباق اللذيذة، بما في ذلك شاورما اللحم وشاورما الدجاج والماريا السورية. يعتبر مطعم كرم الشام مكانًا محترمًا ونظيفًا، ويتميز بطعم أطباقه اللذيذ. يمكنك العثور على فروع مطعم كرم الشام في مناطق مختلفة في مصر، بما في ذلك الإسكندرية وحلوان وشبرا وفيصل. للمزيد من التفاصيل حول قائمة الطعام وأماكن الفروع ورقم توصيل الطلبات، يمكنك زيارة هذا الرابط",
      link:"https://egmenu.com/%D9%83%D8%B1%D9%85-%D8%A7%D9%84%D8%B4%D8%A7%D9%85/"
    },
    {
      id:3,
      thumbnail: "/assets/Images/Gad.jpg",
      title: "جاد",
      summery:"مطعم جاد هو وجهة رائعة لمحبي المأكولات الشعبية في مصر. يقدم المطعم تشكيلة متنوعة من الأطباق المصرية والشرقية، بما في ذلك الفلافل والمشويات. يتميز مطعم جاد بجودة أطعمته ونظافة محيطه",
      link:"https://menuegypt.com/ar/%D8%AC%D8%A7%D8%AF"
    },
    {
      id:4,
      thumbnail: "/assets/Images/Dahan.jpeg",
      title: "الدهان",
    summery:"مطعم الدهان هو وجهة رائعة لمحبي المأكولات الشعبية في مصر. يقدم المطعم تشكيلة متنوعة من الأطباق المصرية والشرقية",
    link:"https://www.eldahan.com/"
    },
    {
      id:5,
      thumbnail: "/assets/Images/AboTarek.jpeg",
      title: "ابو طارق",
      summery:"مطعم كشري أبو طارق هو وجهة رائعة لمحبي المأكولات الشعبية في مصر. يقدم المطعم تشكيلة متنوعة من الأطباق المصرية  يتميز مطعم كشري أبو طارق بجودة أطعمته ونظافة محيطه.",
      link:"https://menuegypt.com/ar/%D9%83%D8%B4%D8%B1%D9%89-%D8%A7%D8%A8%D9%88-%D8%B7%D8%A7%D8%B1%D9%82"
    },
   
  ]
  const restaurant = restaurants.find((restaurant) => restaurant.id == restaurantId);
  if (!restaurant) {
    // Handle case when campaign is not found
    return <div>charity not found.</div>;
  }
  const { thumbnail, title,summery } = restaurant;
  return (
    <div className="col-12 InfoCharity">
      <div className="col-11 Charity_Header " style={{ marginTop: "1rem" }}>
        <h1 className="col-12">المطاعم المساهمة</h1>
      </div>
      <div key={restaurant.id} className="col-10 campaign">
      <div className="col-10 col-md-5 col-lg-5">
          <h3 className="col-12">{restaurant.title}</h3>

          <div className="col-12 volCharityButton">
          
            <Button variant="outline-primary" className="volFoodButton" onClick={navigateToVolWithFood}>
              تبرع بالطعام
            </Button>
          </div>

          <div className="col-12 backDiv">
            <Button className=" col-5 BackToAllCampaigns" onClick={navigateToAllCharities}>
              العودة إلي كل المطاعم
            </Button>
           
          </div>
        </div>
        <img src={restaurant.thumbnail} className="singleCharityImage" />
     
      </div>
      <div className="col-12 Summery">
      <div className="col-11 Charity_Header " style={{ marginTop: "1rem" }}>
        <h1 className="col-12">نبذه مختصرة</h1>
      </div>
      <div className="campaign col-10">
      <p className="col-8">{restaurant.summery}   <a href={restaurant.link} target="_blank">للمزيد اضغط هنا</a></p>
      </div>
        
     
      </div>
      <div className="restBackDiv">
      <FontAwesomeIcon icon={faArrowLeftLong} className="backIcon" onClick={navigateToAllCharities}/>
      </div>
    </div>
      );
    }
