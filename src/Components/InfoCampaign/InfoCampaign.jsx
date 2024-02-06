import React from 'react'
import { Link,useParams } from 'react-router-dom'

export default function InfoCampaign() {
    const{campaignId}=useParams();
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
    const campaign=campaigns.find((campaign)=>campaign.id===campaignId);
    if (!campaign) {
        // Handle case when campaign is not found
        return <div>Campaign not found.</div>;
      }
    const{thumbnail,Name,number}=campaign;
  return (
    <div className='col-12'>
        <img src={thumbnail} alt="Campaign Thumbnail"/>
        <h3>{Name}</h3>
        <h1>{number}</h1>
    </div>
  )
}
