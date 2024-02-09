import Nav from "../../Components/Nav/Nav";
import "./Existing_campaigns.scss"
import Campaign from "../../Components/Campaign/Campaign";
import Footer from "../../Components/Footer/Footer";

export default function Existing_campaigns() {
  return(
    <div className="col-12 Existing_campaigns ">
          <Nav />
          <div className="col-11 Charity_Header Existing_Header " style={{marginTop:"5rem"}}>
          <h1 className="col-12">حملات قائمة</h1>
        </div>
<Campaign/>
<Footer />
    </div>
  ) 
}
