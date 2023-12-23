import { ErrorMessage, Field, Form, Formik } from "formik";
import "./Login.scss";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import loginSchema from "../../Schemas/loginSchema";
import axios from "axios";
import { useRecoilState } from "recoil";
import { authData } from "../../states/atoms/authAtom";

export default function Login() {
  const [auth, setAuth] = useRecoilState(authData);

  console.log(auth)

  function handleLoginAccount(data) {
    axios(
      `http://localhost:3004/users?email=${data.email}&password=${data.password}`
    ).then((data) => {
      if(data.data.length > 0){
        localStorage.setItem('loggedInUser', JSON.stringify(data.data[0]));
        setAuth({
          isAuth: true,
          userId: data.data[0].id
        })
      } else {
       alert("خطأ في البريد الإلكتروني أو كلمة السر ")
      
      }
    });
  }

  return (
    <div className="col-6 col-md-6 col-lg-12 loginForm">
       <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={loginSchema}
      onSubmit={(values) => {
        handleLoginAccount(values);
      }}
    >
      <Form className="user__form">
        <div className="d-flex flex-column gap-2 mb-3">
        <label htmlFor="" className="label">
            البريد الإلكتروني <span>*</span>
          </label>
          <Field name="email" placeholder="البريد الإلكتروني.........." type="email" className="field" />
          <span className="text-danger">
            <ErrorMessage name="email" />
          </span>
        </div>
        <div className="d-flex flex-column gap-2 mb-3">
          <label htmlFor="" className="label">كلمة السر<span>*</span></label>
          <Field name="password" placeholder="ادخل كلمة السر" type="password" className="field"/>
          <span className="text-danger">
            <ErrorMessage name="password" />
          </span>
        </div>
        <div style={{color:"white"}}>
          ليس لديك حساب ؟ <Link to="/register">انشيء حساب الآن</Link>
        </div>
        <div className="d-flex justify-content-end">
          <Button variant="primary" type="submit">
            تسجيل
          </Button>
        </div>
      </Form>
    </Formik>
    </div>
   
  );
}