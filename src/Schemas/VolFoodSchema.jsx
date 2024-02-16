import * as yup from "yup";

const VolFoodSchema = yup.object().shape({
    restaurant: yup
    .string()
    .required("برجاء إدخال اسم المطعم"),
    email: yup
    .string()
    .required("يجب ادخال البريد الإلكتروني")
    .email("يجب ادخال البريد الإلكتروني بطريقة صحيحة"),
    phone:yup
 .number() 
 .required("برجاء إدخال رقم التليفون مسبق بكود الدولة"),
    present: yup
    .string()
    .required("برجاءالإجابة علي هذا السؤال"),
 
 address:yup
 .string()
 
 



});

export default VolFoodSchema;