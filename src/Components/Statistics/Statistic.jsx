import "./Statistics.scss";
import Button from 'react-bootstrap/Button';
export default function Statistics(props) {
  return (

        <div className="StatisticDiv col-10 col-md-10 col-lg-3">
            <div className="circleDiv">{props.Number}</div>
            <p className="col-12">{props.Title}</p>
            <Button variant="outline-primary">تقديم طلب</Button>

       
   
   
    </div>
  
  );
}
