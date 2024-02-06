import { useRecoilState } from "recoil";
import "./Statistics.scss";
import Button from "react-bootstrap/Button";
import { $Form } from "../../Store/Store";
import PresentOrder from "../PresentOrder/PresentOrder";
import { useState } from "react";
export default function Statistics(props) {
  const [form, setform] = useRecoilState($Form);
  return (
    <>
      <div className="StatisticDiv col-10 col-md-10 col-lg-3">
        <div className="circleDiv">{props.Number}</div>
        <p className="col-12">{props.Title}</p>
        <Button variant="outline-primary" onClick={(e) => setform(true)} className="presentButton">
          تقديم طلب
        </Button>
        
      </div>
     
    </>
  );
}
