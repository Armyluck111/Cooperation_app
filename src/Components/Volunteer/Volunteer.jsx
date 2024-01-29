import { Button } from "react-bootstrap";
import "./Volunteer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import { $VolunteerForm } from "../../Store/Store";
import axios from "axios";
import React, { useState } from 'react';



export default function Volunteer() {
const[Vol,setVol]=useRecoilState($VolunteerForm)

  return (
 
        <div className="ContactUs col-12">
      <div
        className="col-8 ContactInfo"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.600)" }}
      >
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="closeForm" onClick={(e)=>setVol(false)}
        />
        <label className="label">
          البريد الإلكتروني <span>*</span>
        </label>
        <input type="email" placeholder="البريد الإلكتروني.........."></input>
        <label className="label">
          رقم التليفون <span>*</span>
        </label>
        <input type="text" placeholder=" رقم التليفون.........."></input>
        <label className="label">
         مبلغ التبرع <span>*</span>
        </label>
       
        <input type="text" placeholder=" مبلغ التبرع........."></input>
        <span> للتبرع من خلال خدمة اتصالات كاش 01124367646</span>
       
        <label className="label">
         اسكرين شوت بالتحويل <span>*</span>
        </label>
     <input type="file"></input>

        <Button variant="info">ارسال</Button>{" "}
      </div>
      <div></div>
    </div>
   
    
  );
}
