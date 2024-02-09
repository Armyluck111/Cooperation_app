import "./VolForm.scss";
import { Button } from "react-bootstrap";
import Select from "react-select";
import Footer from "../Footer/Footer";
import Swal from "sweetalert2";
import { ErrorMessage, Field, Form, Formik } from "formik";
import VolFormSchema from "../../Schemas/VolFormSchema";
import CustomInput from "../SelectInput/components/CustomInput";
import Input_Country from "../SelectInput/components/Input_Country";
export default function VolForm() {
  const optionsCharities = [
    { value: "جمعية رسالة", label: "جمعية رسالة" },
    { value: "مؤسسة صناع الخير", label: "مؤسسة صناع الخير" },
    { value: "مستشفي شفا الأورمان", label: "مستشفي شفا الأورمان" },
    { value: "مصر الخير", label: "مصر الخير" },
    { value: "جمعية مرسال", label: "جمعية مرسال" },
    { value: "مؤسسة مجدي يعقوب", label: "مؤسسة مجدي يعقوب" },
    { value: "جمعية الهلال الأحمر", label: "جمعية الهلال الأحمر" },
    { value: "بنك الإطعام المصري", label: "بنك الإطعام المصري" },
    { value: "لصالح كراتين طعام غزة", label: "لصالح كراتين طعام غزة" },
    { value: "لصالح سماعة أطفال", label: "لصالح سماعة أطفال" },
    {
      value: "لصالح سرير إقامة في مستشفي مرسال",
      label: "لصالح سرير إقامة في مستشفي مرسال",
    },
    {
      value: "لصالح عملية استئصال ورم سرطاني",
      label: "لصالح عملية استئصال ورم سرطاني",
    },
  ];
  const optionsCountry = [
    { value: "مصر", label: "مصر" },
    { value: "السعودية", label: "السعودية" },
    { value: "الإمارات", label: "الإمارات" },
    { value: "الكويت", label: "الكويت" },
  ];

  const showSweet = (values, actions) => {
    actions.resetForm();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "تم التبرع بنجاح",
      showConfirmButton: false,
      timer: 4500,
    });
  };
  return (
    <div className="ContactUs col-12">
      <Formik
        onSubmit={showSweet}
        initialValues={{
          ToWhome: "",
          email: "",
          country: "",
          phone: "",
          value: "",
          method: "",
        }}
        validationSchema={VolFormSchema}
      >
        <Form className="col-10 col-md-8 col-lg-5 ContactInfo VolForm  wow animate__animated animate__backInRight animate__fast">
          <label className="label">
            جهة التبرع <span>*</span>
          </label>
          <Field
            name="ToWhome"
            component={CustomInput}
            options={optionsCharities}
          />
          <span className="text-danger">
            <ErrorMessage name="ToWhome" />
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
            البلد <span>*</span>
          </label>
          <Field
            name="country"
            component={CustomInput}
            options={optionsCountry}
          />
          <span className="text-danger">
            <ErrorMessage name="country" />
          </span>
          <label className="label">
            رقم الهاتف <span>*</span>
          </label>
          <Field
            type="text"
            placeholder="+(code) xxx-xxx-xxx"
            dir="ltr"
            name="phone"
            className="presentField"
          />
          <span className="text-danger">
            <ErrorMessage name="phone" />
          </span>
          <label className="label">
            قيمة التبرع <span>*</span>
          </label>
          <Field
            type="text"
            placeholder="قيمة التبرع........."
            name="value"
            className="presentField"
          />
          <span className="text-danger">
            <ErrorMessage name="value" />
          </span>
          <label className="label">اختيار طريقة الدفع</label>
          <label>
            {" "}
            <Field
              type="radio"
              value="خصم من الرصيد"
              checked
              className="balanceRadio"
              name="method"
            />
            خصم من الرصيد
          </label>
          <Button variant="info" type="submit" className="sendPresent">
            تبرع
          </Button>{" "}
        </Form>
      </Formik>
      <img
        src="./assets/images/2.png"
        className="volImg  wow animate__animated animate__backInLeft animate__fast"
      />
      <Footer />
    </div>
  );
}
