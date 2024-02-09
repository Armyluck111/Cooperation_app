import Nav from "../../Components/Nav/Nav";
import "./Existing_campaigns.scss"
import Campaign from "../../Components/Campaign/Campaign";
import Footer from "../../Components/Footer/Footer";
import TitleAnimation from "../../Components/Loader/TitleAnimation";
import { useEffect, useState } from "react";

export default function Existing_campaigns() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);
  if(loading){
    return<TitleAnimation/>
  }
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
