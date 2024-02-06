import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Router, Routes, Switch } from "react-router-dom";
import Services from "./Pages/Services/Services";
import FAQ from "./Pages/FAQ/FAQ";
import VolAnyCharity from "./Pages/VolunteerAnyCharity/VolAnyCharity.jsx";
import Contact from "./Pages/Contact_Us/Contact";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Nav from "./Components/Nav/Nav.jsx";
import ScrollToTopButton from "./Components/ScroollButton/ScrollToTopButton ";
import Existing_campaigns from "./Pages/Existing_campaigns/Existing_campaigns.jsx";
import InfoCampaign from "./Components/InfoCampaign/InfoCampaign.jsx";
import Campaign from "./Components/Campaign/Campaign.jsx";
import {
  $CurrentLanguage,
  $Current_width,
  $SideMenueIndex,
  $Form,
} from "./Store/Store";
import { useRecoilState } from "recoil";
import IsLoggedIn from "./Components/ProtectedRoutes/IsLogedIn.jsx";
import NotLoggedIn from "./Components/ProtectedRoutes/NotLoggedIn.jsx";
import VolWithfood from "./Pages/VolWithfood/VolWithfood.jsx";
function App() {
  const [currentWidth, setcurrentWidth] = useRecoilState($Current_width);
  const [Sidemenue, setSidemenue] = useRecoilState($SideMenueIndex);
  const [form, setform] = useRecoilState($Form);
  const app = document.querySelector(".App");
  // const closeForm=function closeForm(){
  //   setform(false)
  // }
  // لو الابلكيشن بتاعي فيه عربي وانجليزي بعمل ريكويل ستيت
  // const [currentLanguage,setCurrentLanguage]=useRecoilState($CurrentLanguage)
  // dir{currentLanguage=="english"?"ltr":rtl}
  // app.addEventListener('click',closeForm)
  window.addEventListener("resize", () => {
    setcurrentWidth(window.innerWidth);
  });

  return (
    <>
      <div
        className="App"
        dir="rtl"
        onClick={() => {
          setSidemenue(false);
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <IsLoggedIn>
                  <Home />
                </IsLoggedIn>
              }
            />
            <Route
              path="/services"
              element={
                <IsLoggedIn>
                  <Services />
                </IsLoggedIn>
              }
            />
            <Route
              path="/FAQ"
              element={
                <IsLoggedIn>
                  <FAQ />
                </IsLoggedIn>
              }
            />
            <Route
              path="/VolAnyCharity"
              element={
                <IsLoggedIn>
                  <VolAnyCharity />
                </IsLoggedIn>
              }
            />
            <Route
              path="/VolWithfood"
              element={
                <IsLoggedIn>
                  <VolWithfood />
                </IsLoggedIn>
              }
            />
            <Route
              path="/contact"
              element={
                <IsLoggedIn>
                  <Contact />
                </IsLoggedIn>
              }
            />
            <Route
              path="/Existing_campaigns"
              element={
                <IsLoggedIn>
                  <Existing_campaigns />
                </IsLoggedIn>
              }
            />
              <Route
              path="campaigns/:campaignId"
              element={
                <IsLoggedIn>
                 <InfoCampaign/>
                </IsLoggedIn>
              }
            />
              <Route
              path="/Campaign"
              element={
                <IsLoggedIn>
               <Campaign/>
                </IsLoggedIn>
              }
            />
          
            <Route
              path="/register"
              element={
                <NotLoggedIn>
                  <Register />
                </NotLoggedIn>
              }
            />
            <Route
              path="/login"
              element={
                <NotLoggedIn>
                  <Login />
                </NotLoggedIn>
              }
            />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </BrowserRouter>
        <ScrollToTopButton />
      </div>
    </>
  );
}
export default App;
