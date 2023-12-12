import "./Home.scss";
import Nav from "../../Components/Nav/Nav";
import Services from "../Services/Services";
import FAQ from "../FAQ/FAQ";
import Contact from "../Contact_Us/Contact";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Statistics from "../../Components/Statistics/Statistic";
import Footer from "../../Components/Footer/Footer";
export default function Home() {
  return (
    <div className="Main_Section col-12">
      <img src="./assets/Images/1.png" className=" col-12 Main_img" />
      <div className="VolButton">
      <button class="btn btn-primary " type="button">
        تطوع الآن
      </button>
      </div>
  
      <div className="col-12 allSstatistics">
        <Statistics Number="+١٢٣" Title=" المطاعم المساهمة" />
        <Statistics Number="+٥٦" Title="الجمعيات الخيرية المساهمة" />
        <Statistics Number="+٨٩" Title="المتطوعين" />
      </div>

      <Footer />
    </div>
  );
}
