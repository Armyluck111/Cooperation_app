import "./Restaurants.scss"
export default function Restaurants(props) {
    return (
      <div className="Restaurants col-3">
      <div className="Restaurant">
        <img src={props.img} className="ResImg"/>
        <div className="col-12 content_restaurant">
          <h2>{props.title}</h2>
        </div>
      </div>
      </div>
    );
  }