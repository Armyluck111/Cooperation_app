import { ErrorMessage, Field, Form, Formik } from "formik";
import "./Register.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import registerSchema from '../../Schemas/registerSchema';
import axios from "axios";

export default function Register() {

  function handleRegisterAccount(data) {
    delete data.confirmPassword;
    axios.post('http://localhost:3004/users', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={registerSchema}
      onSubmit={(values) => {
        handleRegisterAccount(values)
      }}
    >
      <Form className="user__form my-5" >
        <div className="d-flex flex-column gap-2 mb-3">
          <label htmlFor="">الإسم كاملا<span>*</span></label>
          <Field name="name" placeholder="ادخل الاسم كاملا.........." type="text" />
          <span className="text-danger"><ErrorMessage name="name"/></span>
        </div>
        <div className="d-flex flex-column gap-2 mb-3">
        <label htmlFor="">البريد الإلكتروني<span>*</span></label>
          <Field name="email" placeholder="ادخل البريد الإلكتروني" type="email" />
          <span className="text-danger"><ErrorMessage name="email"/></span>
        </div>
        <div className="d-flex flex-column gap-2 mb-3">
        <label htmlFor="">كلمة السر<span>*</span></label>
          <Field name="password" placeholder="ادخل كلمة السر" type="password" />
          <span className="text-danger"><ErrorMessage name="password"/></span>
        </div>
        <div className="d-flex flex-column gap-2 mb-3">
        <label htmlFor="">تأكيد كلمة السر<span>*</span></label>
          <Field
            name="confirmPassword"
            placeholder="ادخل كلمة السر مره اخري"
            type="password"
          />
          <span className="text-danger"><ErrorMessage name="confirmPassword"/></span>
        </div>
        <div>
          هل لديك حساب بالفعل؟ <Link to="/login">تسجيل الدخول</Link>
        </div>
        <div className="d-flex justify-content-end">
          <Button variant="primary" type="submit">
            تسجيل حساب جديد
          </Button>
        </div>
      </Form>
    </Formik>
  );
}
