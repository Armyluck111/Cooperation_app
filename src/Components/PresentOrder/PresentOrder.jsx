import { Button } from "react-bootstrap";
import "./PresentOrder.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import { $Form } from "../../Store/Store";
import Swal from "sweetalert2";
import { ErrorMessage, Field, Form, Formik } from "formik";
import PresentOrderSchema from "../../Schemas/PresentOrderSchema";

export default function PresentOrder() {
  const [form, setform] = useRecoilState($Form);
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
          present: "",
          email: "",

          phone: "",
        }}
        validationSchema={PresentOrderSchema}
      >
        <Form
          className="col-10 col-md-8 col-lg-5  present"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.600)" }}
        >
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="closeForm"
            onClick={(e) => setform(false)}
          />
          <label className="label">
            الجهة المساهمة <span>*</span>
          </label>
          <label>
            <Field
              type="radio"
              value="مطعم"
              name="present"
              className="presentField"
            />
            مطعم
          </label>
          <label>
            <Field
              type="radio"
              value="جمعية خيرية"
              name="present"
              className="presentField"
            />
            جمعية خيرية
          </label>
          <label>
            <Field
              type="radio"
              value="متطوع"
              name="present"
              className="presentField"
            />
            متطوع
          </label>
          <span className="text-danger">
            <ErrorMessage name="present" />
          </span>
          <label className="label">
            البريد الإلكتروني <span>*</span>
          </label>
          <Field
            type="email"
            placeholder="البريد الإلكتروني.........."
            name="email"
            className="presentField"
          />
          <span className="text-danger">
            <ErrorMessage name="email" />
          </span>
          <label className="label">
            رقم التليفون <span>*</span>
          </label>
          <Field
            type="text"
            placeholder=" رقم التليفون.........."
            name="phone"
            className="presentField"
          />
          <span className="text-danger">
            <ErrorMessage name="phone" />
          </span>
          <Button variant="primary" type="submit" className="sendPresent">
            ارسال
          </Button>{" "}
        </Form>
      </Formik>
      <div></div>
    </div>
  );
}
