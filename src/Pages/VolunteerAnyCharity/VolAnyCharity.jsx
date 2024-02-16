import "./VolAnyCharity.scss";
import Nav from "../../Components/Nav/Nav";
import VolForm from "../../Components/volForm/VolForm";
import { useEffect, useState } from "react";
import TitleAnimation from "../../Components/Loader/TitleAnimation";

export default function VolAnyCharity() {
  return (
    <>
      <Nav />
      <div className="col-12 volPage">
        <div className="col-11 Charity_Header volCharityHeader ">
          <h1 className="col-12">مؤسسة غيث</h1>
        </div>

        <VolForm />
      </div>
    </>
  );
}
