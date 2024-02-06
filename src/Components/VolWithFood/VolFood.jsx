import "./VolFood.scss";
import { Button } from "react-bootstrap";
import Select from "react-select";
import Footer from "../Footer/Footer";
import Swal from "sweetalert2";
import { ErrorMessage, Field, Form, Formik } from "formik";
import VolFoodSchema from "../../Schemas/VolFoodSchema";
export default function VolFood() {
  const showSweet = (values, actions) => {
    actions.resetForm();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "تم ارسال الطلب بنجاح",
      showConfirmButton: false,
      timer: 4500,
    });
  };
  return (
    <div className="ContactUs col-12">
      <Formik
        onSubmit={showSweet}
        initialValues={{
         restaurant:"",
         email:"",
         phone:"",
         present:"",
         address:"",

        }}
        validationSchema={VolFoodSchema}
      >
        <Form className="col-5 ContactInfo">
          <label className="label">
            اسم المطعم <span>*</span>
          </label>
          <Field
            type="text"
            placeholder=" اسم المطعم.........."
            name="restaurant" className="presentField"
          />
          <span className="text-danger">
            <ErrorMessage name="restaurant" />
          </span>
          <label className="label">
            البريد الإلكتروني <span>*</span>
          </label>
          <Field
            type="email"
            placeholder="البريد الإلكتروني.........."
            name="email" className="presentField"
          />
          <span className="text-danger">
            <ErrorMessage name="email" />
          </span>
          <label className="label">
            رقم الهاتف <span>*</span>
          </label>
          <Field
            type="text"
            placeholder="+(code) xxx-xxx-xxx"
            dir="ltr"
            name="phone" className="presentField"
          />
          <span className="text-danger">
            <ErrorMessage name="phone" />
          </span>
          <label className="label">
            هل ستقوم بالتوصيل بنفسك ؟ <span>*</span>
          </label>
          <label>
            <Field type="radio" value="مطعم" name="present" className="presentField" />
            نعم
          </label>
          <label>
            <Field type="radio" value="مطعم" name="present" className="presentField" />
            لا
          </label>
          <span className="text-danger">
            <ErrorMessage name="present" />
          </span>
          <label className="label">
            اذا لم تستطع التوصيل بنفسك برجاء كتابة عنوان المطعم بالتفصيل{" "}
            <span>*</span>
          </label>
          <Field
            type="text"
            placeholder="برجاء كتابة العنوان بالتفصيل..........."
            name="address" className="presentField"
          />
          <span className="text-danger">
            <ErrorMessage name="address" />
          </span>
          <Button variant="info" type="submit" className="sendPresent">
            تبرع
          </Button>{" "}
        </Form>
      </Formik>
      <img src="./assets/images/2.png" className="volImg" />
      <Footer />
    </div>
  );
}
