import * as yup from "yup";

const VolFormSchema = yup.object().shape({
    present: yup
    .string()
    .required(" يجب اختيار جهة التبرع "),
    email: yup
    .string()
    .required("يجب ادخال البريد الإلكتروني")
    .email("يجب ادخال البريد الإلكتروني بطريقة صحيحة"),
    country: yup
    .string()
    .required("يجب ادخال البلد"),
 phone:yup
 .number() 
 .required("برجاء إدخال رقم التليفون مسبق بكود الدولة"),
 value:yup
 .string()
 .required("برجاء إدخال قيمة التبرع"),



});

export default VolFormSchema;