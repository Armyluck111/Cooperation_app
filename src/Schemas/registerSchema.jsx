import * as yup from "yup";

const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("يجب ادخال الإسم كاملا")
    .min(3, "يجب أن يكون الإسم ثلاثي علي الأقب"),
  email: yup
    .string()
    .required("يجب ادخال البريد الإلكتروني")
    .email("يجب ادخال البريد الإلكتروني بطريقة صحيحة"),
  password: yup
    .string()
    .required("يجب ادخال كلمة السر")
    .min(6, "يجب ألا تقل كلمة السر عن ستة أحرف"),
    
  confirmPassword: yup
    .string()
    .required("يجب اعادة كلمة السر مره أخري")
    .oneOf([yup.ref("password")], "كلمة السر غير مطابقة "),
});

export default registerSchema;