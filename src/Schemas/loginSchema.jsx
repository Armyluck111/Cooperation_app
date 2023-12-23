import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("يجب ادخال البريد الإلكتروني")
    .email("يجب ادخال البريد الإلكتروني بطريقة صحيحة"),
  password: yup
    .string()
    .required("يجب ادخال كلمة السر")
});

export default loginSchema;