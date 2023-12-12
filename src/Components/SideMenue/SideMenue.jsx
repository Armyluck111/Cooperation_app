import { NavLink } from "react-router-dom"
import"./SideMenue.scss"
import { $Current_width, $SideMenueIndex } from "../../Store/Store";
import { useRecoilState } from "recoil";

export default function SideMenue(){
    const [currentWidth, setcurrentWidth] = useRecoilState($Current_width);
    const [Sidemenue, setSidemenue] = useRecoilState($SideMenueIndex);
    return(<>
        <div className="sidemenue">
             <NavLink
              to="/"
              style={{ textDecoration: "none" }}
              className="Nav_link"
            >
              الرئيسية
            </NavLink>
            <NavLink
              to="/services"
              style={{ textDecoration: "none" }}
              className="Nav_link"
            >
              الجمعيات والمطاعم
            </NavLink>
            <NavLink
              to="/FAQ"
              style={{ textDecoration: "none" }}
              className="Nav_link"
            >
              الأسئلة الشائعة
            </NavLink>
            <NavLink
              to="/contact"
              style={{ textDecoration: "none" }}
              className="Nav_link"
            >
              {" "}
              اتصل بنا
            </NavLink>
            <NavLink
              to="/login"
              style={{ textDecoration: "none" }}
              className="Nav_link"
            >
              الدخول
            </NavLink>
            <NavLink
              to="/register"
              style={{ textDecoration: "none" }}
              className="Nav_link"
            >
              التسجيل
            </NavLink>
        </div>
        </>
    )
  
}
    