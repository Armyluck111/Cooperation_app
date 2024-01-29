import "./VolAnyCharity.scss";
import Nav from "../../Components/Nav/Nav";
import VolForm from "../../Components/volForm/VolForm";

export default function VolAnyCharity() {
  return (
    <>
      <Nav />
      <div className="col-12 volPage">
        <div className="col-11 Charity_Header ">
          <h1 className="col-12">مؤسسة غيث</h1>
        </div>

        <VolForm />
      </div>
    </>
  );
}
