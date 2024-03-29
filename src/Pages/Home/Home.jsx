import "./Home.scss";
import Nav from "../../Components/Nav/Nav";

import Statistics from "../../Components/Statistics/Statistic";
import Footer from "../../Components/Footer/Footer";
import Carousel from "../../Components/Carousel/Carousel";
import { $Form } from "../../Store/Store";
import { useRecoilState } from "recoil";
import PresentOrder from "../../Components/PresentOrder/PresentOrder";
import Chart from "../../Components/Chart/Chart";
import { useEffect, useState } from "react";
import TitleAnimation from "../../Components/Loader/TitleAnimation";

export default function Home() {
  const [form, setform] = useRecoilState($Form);

  return (
    <>
      <Nav />
      <div className="Main_Section col-12">
        <div className="col-12">
          <Carousel />
        </div>

        <div className="col-12 allSstatistics">
          <Statistics Number="+٥" Title=" المطاعم المساهمة" />
          <Statistics Number="+٨" Title="الجمعيات الخيرية المساهمة" />
          <Statistics Number="+٨٩" Title="المتطوعين" />
          {form ? <PresentOrder /> : ""}
        </div>
        <Chart />
        <Footer />
      </div>
    </>
  );
}
