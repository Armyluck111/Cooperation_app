import * as yup from "yup";

const ContactSchema = yup.object().shape({
    name: yup
    .string()
    .required("برجاء كتابة الإسم"),
    email: yup
    .string()
    .required("يجب ادخال البريد الإلكتروني")
    .email("يجب ادخال البريد الإلكتروني بطريقة صحيحة"),
    subject:yup
 .string() 
 .required("برجاء كتابة الموضوع المراد التجدث عنه"),
    message: yup
    .string()
    .required("برجاء ترك رسالتك هنا"),
 

 



});

export default ContactSchema;