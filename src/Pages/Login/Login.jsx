import { ErrorMessage, Field, Form, Formik } from "formik";
import "./Login.css";
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
        console.log('Email or password not correct')
      }
    });
  }

  return (
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
      <Form className="user__form my-5">
        <div className="d-flex flex-column gap-2 mb-3">
        <label htmlFor="" className="label">
            البريد الإلكتروني <span>*</span>
          </label>
          <Field name="email" placeholder="البريد الإلكتروني.........." type="email" />
          <span className="text-danger">
            <ErrorMessage name="email" />
          </span>
        </div>
        <div className="d-flex flex-column gap-2 mb-3">
          <label htmlFor="">كلمة السر<span>*</span></label>
          <Field name="password" placeholder="ادخل كلمة السر.........." type="password" />
          <span className="text-danger">
            <ErrorMessage name="password" />
          </span>
        </div>
        <div>
          Don't Have and account? <Link to="/register">Create new account</Link>
        </div>
        <div className="d-flex justify-content-end">
          <Button variant="primary" type="submit">
            Login
          </Button>
        </div>
      </Form>
    </Formik>
  );
}