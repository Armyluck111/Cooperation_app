import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { } from "@fortawesome/free-solid-svg-icons";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./Pages/Services/Services";
import FAQ from "./Pages/FAQ/FAQ";
import Contact from "./Pages/Contact_Us/Contact";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Nav from "./Components/Nav/Nav";
import ScrollToTopButton from "./Components/ScroollButton/ScrollToTopButton ";
import { $CurrentLanguage, $Current_width, $SideMenueIndex } from "./Store/Store";
import { useRecoilState } from "recoil";
function App() {
  const [currentWidth,setcurrentWidth]=useRecoilState($Current_width)
  const [Sidemenue, setSidemenue] = useRecoilState($SideMenueIndex);
  // لو الابلكيشن بتاعي فيه عربي وانجليزي بعمل ريكويل ستيت
// const [currentLanguage,setCurrentLanguage]=useRecoilState($CurrentLanguage)
// dir{currentLanguage=="english"?"ltr":rtl}

  window.addEventListener("resize",()=>{
    setcurrentWidth(window.innerWidth)
  })
  return (
    <div className="App" dir="rtl" onClick={()=>{
      setSidemenue(false);
    }}>
 
    <BrowserRouter>
    <Nav/>
        <Routes>
          <Route path="/" element={<Home />}/>
            <Route path="/services" element={<Services/>} />
            <Route path="/FAQ" element={<FAQ/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="*" element={<h1>Page Not Found</h1>}/>
         
        </Routes>
      </BrowserRouter>
      <ScrollToTopButton/>
    </div>
  );
}
export default App;
