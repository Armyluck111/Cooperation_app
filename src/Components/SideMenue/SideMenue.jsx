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
                to="/VolAnyCharity"
                // style={{ textDecoration: "none" }}
                className="Nav_link"
              >
               تبرع بالمال
              </NavLink>
              <NavLink
                to="/VolWithfood"
                // style={{ textDecoration: "none" }}
                className="Nav_link"
              >
                تبرع بالطعام
              </NavLink>
              <NavLink
                to="/Existing_campaigns"
                // style={{ textDecoration: "none" }}
                className="Nav_link"
              >
                حملات قائمة
              </NavLink>
            <NavLink
              to="/contact"
              style={{ textDecoration: "none" }}
              className="Nav_link"
            >
              {" "}
               تواصل معنا
            </NavLink>
       
         
        </div>
        </>
    )
  
}
    