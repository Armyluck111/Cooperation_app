import { useRecoilState } from "recoil";
import "./Statistics.scss";
import Button from "react-bootstrap/Button";
import { $Form } from "../../Store/Store";

import { WOW } from "wowjs";
import { useEffect } from "react";
export default function Statistics(props) {
  const [form, setform] = useRecoilState($Form);
  useEffect(() => {
  const wow = new WOW({ live: false });
  wow.init();
});
  return (
    <>
      <div className="StatisticDiv col-10 col-md-10 col-lg-3  wow animate__animated animate__backInRight animate__fast">
        <div className="circleDiv wow animate__animated animate__backInDown animate__fast">{props.Number}</div>
        <p className="col-12 wow animate__animated animate__backInDown animate__fast">{props.Title}</p>
        <Button variant="outline-primary" onClick={(e) => setform(true)} className="presentButton wow animate__animated animate__backInDown animate__fast">
          تقديم طلب
        </Button>
        
      </div>
     
    </>
  );
}
