import "./VolWithfood.scss";
import Nav from "../../Components/Nav/Nav";
import VolFood from "../../Components/VolWithFood/VolFood";
import { useEffect, useState } from "react";
import TitleAnimation from "../../Components/Loader/TitleAnimation";



export default function VolWithfood() {
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
  return (
    <>
      <Nav />
      <div className="col-12 volPage">
        <div className="col-11 Charity_Header volFoodHeader ">
          <h1 className="col-12">مؤسسة غيث</h1>
        </div>
<VolFood/>

        
      </div>
    </>
  );
}
