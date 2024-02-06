import * as yup from "yup";

const PresentOrderSchema = yup.object().shape({
    email: yup
    .string()
    .required("يجب ادخال البريد الإلكتروني")
    .email("يجب ادخال البريد الإلكتروني بطريقة صحيحة"),
  present: yup
    .string()
    .required("يجب اختيار الجهة المساهمة"),
 phone:yup
 .number() 
 .required("برجاء إدخال رقم التليفون مسبق بكود الدولة")
});

export default PresentOrderSchema;