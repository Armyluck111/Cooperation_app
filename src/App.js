import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./Pages/Services/Services";
import FAQ from "./Pages/FAQ/FAQ";
import Contact from "./Pages/Contact_Us/Contact";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Nav from "./Components/Nav/Nav";
import ScrollToTopButton from "./Components/ScroollButton/ScrollToTopButton ";
import {
  $CurrentLanguage,
  $Current_width,
  $SideMenueIndex
} from "./Store/Store";
import { useRecoilState } from "recoil";
import IsLoggedIn from "./Components/ProtectedRoutes/IsLogedIn.jsx";
import NotLoggedIn from "./Components/ProtectedRoutes/NotLoggedIn.jsx";
function App() {
  const [currentWidth, setcurrentWidth] = useRecoilState($Current_width);
  const [Sidemenue, setSidemenue] = useRecoilState($SideMenueIndex);
  
  // لو الابلكيشن بتاعي فيه عربي وانجليزي بعمل ريكويل ستيت
  // const [currentLanguage,setCurrentLanguage]=useRecoilState($CurrentLanguage)
  // dir{currentLanguage=="english"?"ltr":rtl}

  window.addEventListener("resize", () => {
    setcurrentWidth(window.innerWidth);
  });
  return (
    <div
      className="App"
      dir="rtl"
      onClick={() => {
        setSidemenue(false)
      }}
    >
      <BrowserRouter>
        <Nav />
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
            path="/contact"
            element={
              <IsLoggedIn>
                <Contact />
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
  );
}
export default App;
