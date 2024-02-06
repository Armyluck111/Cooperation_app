import "./VolWithfood.scss";
import Nav from "../../Components/Nav/Nav";
import VolFood from "../../Components/VolWithFood/VolFood";



export default function VolWithfood() {
  return (
    <>
      <Nav />
      <div className="col-12 volPage">
        <div className="col-11 Charity_Header ">
          <h1 className="col-12">مؤسسة غيث</h1>
        </div>
<VolFood/>

        
      </div>
    </>
  );
}
