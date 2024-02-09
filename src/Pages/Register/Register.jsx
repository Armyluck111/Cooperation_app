import { ErrorMessage, Field, Form, Formik } from "formik";
import "./Register.scss";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import registerSchema from '../../Schemas/registerSchema';
import axios from "axios";
import Swal from "sweetalert2";

export default function Register() {

  function handleRegisterAccount(data) {
    delete data.confirmPassword;
    axios.post('http://localhost:3004/users', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  const showSweet = (values, actions) => {
    actions.resetForm();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "شكرًا لتسجيلك حسابًا مع مؤسسة غيث يمكنك الآن تسجيل الدخول. ",
      showConfirmButton: false,
      timer: 4500,
    });
  };
  return (
    <div className="col-6 col-md-6 col-lg-12 registerForm">
        <h1>مرحبًا بك في مؤسسة غيث !</h1>
      {/* <img src="./assets/Images/Login4.png" className="col-12 loginImg"/> */}
       <Formik
       onSubmit={showSweet}
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={registerSchema}
      // onSubmit={(values) => {
      //   handleRegisterAccount(values)
      // }}
    >
      <Form className="user__form" >
      <h3>سجل حساب جديد الآن</h3>
        <div className="d-flex flex-column gap-2 mb-3">
          <label htmlFor="" className="label">الإسم كاملا<span>*</span></label>
          <Field name="name" placeholder="ادخل الاسم كاملا.........." type="text" className="field" />
          <span className="text-danger"><ErrorMessage name="name"/></span>
        </div>
        <div className="d-flex flex-column gap-2 mb-3">
        <label htmlFor="" className="label">البريد الإلكتروني<span>*</span></label>
          <Field name="email" placeholder="ادخل البريد الإلكتروني" type="email"   className="field"/>
          <span className="text-danger"><ErrorMessage name="email"/></span>
        </div>
        <div className="d-flex flex-column gap-2 mb-3">
        <label htmlFor="" className="label">كلمة السر<span>*</span></label>
          <Field name="password" placeholder="ادخل كلمة السر" type="password" className="field"/>
          <span className="text-danger"><ErrorMessage name="password"/></span>
        </div>
        <div className="d-flex flex-column gap-2 mb-3">
        <label htmlFor="" className="label">تأكيد كلمة السر<span>*</span></label>
          <Field
            name="confirmPassword"
            placeholder="ادخل كلمة السر مره اخري"
            type="password" className="field"
          />
          <span className="text-danger"><ErrorMessage name="confirmPassword"/></span>
        </div>
        <div style={{color:"#000000"}}>
          هل لديك حساب بالفعل؟ <Link to="/login" style={{color:"#1a5d1a"}}>تسجيل الدخول</Link>
        </div>
        <div className="d-flex justify-content-end">
          <Button variant="primary" type="submit" className="formButton">
            تسجيل حساب جديد
          </Button>
        </div>
      </Form>
    </Formik>
    </div>
   
  );
}
