import { useRecoilState } from "recoil";
import "./Statistics.scss";
import Button from 'react-bootstrap/Button';

import PresentOrder from "../PresentOrder/PresentOrder";
import { useState } from "react";
export default function Statistics(props) {
const [form,setform]=useState(false)
  return (<>


        <div className="StatisticDiv col-10 col-md-10 col-lg-3">
            <div className="circleDiv">{props.Number}</div>
            <p className="col-12">{props.Title}</p>
            <Button variant="outline-primary" onClick={()=>setform(true)}>تقديم طلب</Button>
            

       
   
   
    </div>
    {form?<PresentOrder/>:""}
  
    </>
  );
}
