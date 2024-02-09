import React from 'react'
import "./Campaign.scss"
import { Link } from 'react-router-dom'
import InfoCampaign from '../InfoCampaign/InfoCampaign'
export default function Campaign() {
    const campaigns=[
        {
            id: 1,
            thumbnail: "assets/Images/gaza.jpg",
            Name:"لصالح كراتين طعام غزة",
           number:"400"
          },
          {
          id: 2,
          thumbnail: "assets/Images/Children.jpeg",
          Name:"لصالح سماعة أطفال",
         number:"105"
        },
        {
            id: 3,
            thumbnail: "assets/Images/mersal.png",
            Name:"لصالح سرير إقامة في مستشفي مرسال",
           number:"209"
          },
          {
          id: 4,
          thumbnail: "assets/Images/57375.jpg",
          Name:"لصالح عملية استئصال ورم سرطاني",
         number:"23"
        },
    ]
  return (
    <div className="col-12 campaigns" dir="rtl">
    {campaigns.map(function(campaign){
      return(
        <div key={campaign.id} className="col-10 col-md-5 col-lg-5 campaign wow animate__animated animate__backInRight animate__fast">

          <img src={campaign.thumbnail} className="campaign_img wow animate__animated animate__backInUp animate__fast"/>
       <h3 className='col-12  wow animate__animated animate__backInUp animate__fast'>{campaign.Name}</h3>
       <p className='col-12  wow animate__animated animate__backInUp animate__fast'>عدد المتبرعين:{campaign.number}</p>
      <Link to={`/campaigns/${campaign.id}`}>المزيد من التفاصيل</Link>
        </div>
      )
    })}
    </div>
  )
}
