import React from "react";
import "./InfoCampaign.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import Nav from "../Nav/Nav";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

export default function InfoCampaign() {
  const navigate = useNavigate();


  const navigateToVolunteer=()=>{
 navigate("/VolAnyCharity")
  };
  const navigateToExistingCampaigns = () => {
    navigate("/Existing_campaigns");
  };
  const { campaignId } = useParams();
  const campaigns = [
    {
      id: 1,
      thumbnail: "/assets/Images/gaza.jpg",
      Name: "لصالح كراتين طعام غزة",
      number: "400",
      volTo:"5894"
    },
    {
      id: 2,
      thumbnail: "/assets/Images/Children.jpeg",
      Name: "لصالح سماعة أطفال",
      number: "105",
      volTo:"1278"
    },
    {
      id: 3,
      thumbnail: "/assets/Images/mersal.png",
      Name: "لصالح سرير إقامة في مستشفي مرسال",
      number: "209",
      volTo:"6313"
    },
    {
      id: 4,
      thumbnail: "/assets/Images/57375.jpg",
      Name: "لصالح عملية استئصال ورم سرطاني",
      number: "23",
      volTo:"57357"
    },
  ];
  const campaign = campaigns.find((campaign) => campaign.id == campaignId);
  if (!campaign) {
    // Handle case when campaign is not found
    return <div>Campaign not found.</div>;
  }
  const { thumbnail, Name, number,volTo } = campaign;
  return (
    <>
      <div className="col-12 InfoCampaign">
        <div className="col-11 Charity_Header  wow animate__animated animate__backInRight animate__fast" style={{ marginTop: "1rem" }}>
          <h1 className="col-12">حملات قائمة</h1>
        </div>
        <div key={campaign.id} className="col-10 campaign  wow animate__animated animate__backInRight animate__fast">
        <div className="col-10 col-md-5 col-lg-5">
            <h3 className="col-12">{campaign.Name}</h3>
            <p className="col-12">عدد المتبرعين:{campaign.number}</p>
            <div className="col-12 VolCampaign">
              <p className="col-12">
                للتبرع عن طريق SMS إرسل كود غيث 111  الى رقم {campaign.volTo} قيمة التبرع 5 جم
              </p>
              <div className="col-12 cautionMessage ">
                <FontAwesomeIcon icon={faCircleExclamation} className="cautionIcon" />
                <p>برجاء التأكد من وضع مسافه بين شقي الكود</p>
              </div>
            </div>
            <Button onClick={navigateToVolunteer} variant="outline-primary" className="volCampaignButton">تبرع من خلال الموقع</Button>
            <div className="col-12 backDiv">
              <Button
                onClick={navigateToExistingCampaigns}
                className=" col-5 BackToAllCampaigns"
              >
                العوده إلي كل الحملات
              </Button>
             
            </div>
          </div>
          <img src={campaign.thumbnail} className="campaign_img" />
       
        </div>
        <div className="backIconDiv">
      <FontAwesomeIcon icon={faArrowLeftLong} className="backIcon" onClick={navigateToExistingCampaigns}/>
      </div>
      </div>
    </>
  );
}
