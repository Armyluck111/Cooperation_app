import * as yup from "yup";

const VolFormSchema = yup.object().shape({
    ToWhome: yup.string().required("برجاء إدخال جهة التبرع"),
    email: yup
    .string()
    .required("يجب ادخال البريد الإلكتروني")
    .email("يجب ادخال البريد الإلكتروني بطريقة صحيحة"),
country: yup.string().required("برجاء إدخال  الدولة"),
 phone:yup
 .number() 
 .required("برجاء إدخال رقم التليفون مسبق بكود الدولة"),
 value:yup
 .string()
 .required("برجاء إدخال قيمة التبرع"),



});

export default VolFormSchema;