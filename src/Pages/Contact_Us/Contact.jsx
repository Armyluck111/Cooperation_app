import "./Contact.scss";
import Nav from "../../Components/Nav/Nav";
import ContactUs from "../../Components/ContactUs/ContactUs";



export default function VolWithfood() {
  return (
    <>
      <Nav />
      <div className="col-12 volPage">
        <div className="col-11 Charity_Header contact_Header ">
          <h1 className="col-12">مؤسسة غيث</h1>
        </div>
<ContactUs/>

        
      </div>
    </>
  );
}
