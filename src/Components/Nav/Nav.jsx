import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faHandHoldingHeart,
  faQuestion,
  faPhone,
  faUser,
  faLock,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "./Nav.scss";
import { useRecoilState } from "recoil";
import { $Current_width, $SideMenueIndex } from "../../Store/Store";
import SideMenue from "../SideMenue/SideMenue";
import { authData } from "../../states/atoms/authAtom";
import LogoutButton from "../LogoutButton/LogoutButton";
import { Fragment, useState } from "react";
import { Button } from "react-bootstrap";

export default function Nav() {
  const [currentWidth, setcurrentWidth] = useRecoilState($Current_width);
  const [sidemenue, setsidemenue] = useRecoilState($SideMenueIndex);
  const [auth] = useRecoilState(authData);
  const[color,setColor]=useState("red")

  return (
    <>
      {}
      {currentWidth <= 767 && sidemenue == true ? <SideMenue /> : null}
      {/*عملت شرط في المقاس الصغير يحط الناف كلها من غير اللينكات ويحط البار غير كده يحط الناف كلها عادي[] */}
      {currentWidth <= 767 ? (
        <div className="col-12 Nav">
          <img src="./assets/images/4.png" className="Main_logo" />
          <div className="BarIconDiv col-3">
            {" "}
            <span
              onClick={(e) => {
                e.stopPropagation();
                sidemenue == true ? setsidemenue(false) : setsidemenue(true);
              }}
            >
              {" "}
              <FontAwesomeIcon icon={faBars} className="BarIcon col-10" />
            </span>
          </div>
        </div>
      ) : (
        <div className="col-12 Nav">
          <img src="./assets/Images/4.png" className="Main_logo col-1" />

          <div className="Routes">
            <div className="Nav_icon">
              {" "}
              {/* <FontAwesomeIcon icon={faHouse} /> */}
              <NavLink
                to="/"
                style={{ textDecoration: "none" }}
                className="Nav_link"
              >
                الرئيسية
              </NavLink>
            </div>
            <div className="Nav_icon">
              {/* <FontAwesomeIcon icon={faHandHoldingHeart} /> */}
              <NavLink
                to="/services"
                style={{ textDecoration: "none" }}
                className="Nav_link"
              >
                الجمعيات والمطاعم
              </NavLink>
            </div>
            <div className="Nav_icon">
              {/* <FontAwesomeIcon icon={faQuestion} /> */}
              <NavLink
                to="/FAQ"
                style={{ textDecoration: "none" }}
                className="Nav_link"
              >
                الأسئلة الشائعة
              </NavLink>
            </div>
            <div className="Nav_icon">
              {/* <FontAwesomeIcon icon={faQuestion} /> */}
              <NavLink
                to="/VolAnyCharity"
                style={{ textDecoration: "none" }}
                className="Nav_link"
              >
               تبرع بالمال
              </NavLink>
            </div>
            <div className="Nav_icon">
              {/* <FontAwesomeIcon icon={faQuestion} /> */}
              <NavLink
                to="/VolWithfood"
                style={{ textDecoration: "none" }}
                className="Nav_link"
              >
                تبرع بالطعام
              </NavLink>
            </div>
            <div className="Nav_icon">
              {/* <FontAwesomeIcon icon={faQuestion} /> */}
              <NavLink
                to="/Existing_campaigns"
                style={{ textDecoration: "none" }}
                className="Nav_link"
              >
                حملات قائمة
              </NavLink>
            </div>
            <div className="Nav_icon">
              {/* <FontAwesomeIcon icon={faPhone} /> */}
              <NavLink
                to="/contact"
                style={{ textDecoration: "none" }}
                className="Nav_link"
              >
                {" "}
                تواصل معنا
              </NavLink>
            </div>
          </div>
          {auth.isAuth ? (
            <LogoutButton />
          ) : (
            <div className="Registering">
              <div className="Nav_icon">
                {/* <FontAwesomeIcon icon={faLock} /> */}
                <NavLink
                  to="/login"
                  style={{ textDecoration: "none" }}
                  className="Nav_link"
                >
                  <Button
                    variant="primary"
                    style={{ backgroundColor: { color } }}
                    onClick={() => {
                      setColor("black");
                    }}
                  >
                    تسجيل الدخول
                  </Button>
                </NavLink>
              </div>

              <div className="Nav_icon">
                {/* <FontAwesomeIcon icon={faUser} /> */}
                <NavLink
                  to="/register"
                  style={{ textDecoration: "none" }}
                  className="Nav_link"
                >
                  <Button variant="primary">إنشاء حساب </Button>
                </NavLink>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
