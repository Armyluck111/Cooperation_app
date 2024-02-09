import "./ContactUs.scss"
import { Button } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Swal from "sweetalert2";
import ContactSchema from "../../Schemas/ContactShema";
import { ErrorMessage, Field, Form, Formik } from "formik";
export default function ContactUs(){
    const showSweet = (values, actions) => {
        actions.resetForm();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "تم ارسال رسالتك بنجاح",
          showConfirmButton: false,
          timer: 4500,
        });
      };
    return(
        <div className="ContactUs col-12">
        <Formik
          onSubmit={showSweet}
          initialValues={{
            name: "",
            email: "",
            subject: "",
            message: "",
          }}
          validationSchema={ContactSchema}
        >
          <Form className="col-10 col-md-8 col-lg-5 ContactInfo  wow animate__animated animate__backInRight animate__fast" style={{ margin: "0" }}>
            <label className="label">
              الإسم <span>*</span>
            </label>
            <Field type="text" placeholder="الإسم.........." name="name" className="presentField" />
            <span className="text-danger">
              <ErrorMessage name="name" />
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
              الموضوع <span>*</span>
            </label>
            <Field type="text" placeholder="الموضوع.........." name="subject" className="presentField"/>
            <span className="text-danger">
              <ErrorMessage name="subject" />
            </span>
            <label className="label">
              اترك رسالتك <span>*</span>
            </label>
            <Field
              placeholder="اترك رسالتك.........."
              name="message" className="presentField"
            />
            <span className="text-danger">
              <ErrorMessage name="message" />
            </span>
            <Button variant="info" type="submit" className="sendPresent">
              ارسال
            </Button>{" "}
          </Form>
          </Formik>

      
        <Footer />
      </div>
    )
}