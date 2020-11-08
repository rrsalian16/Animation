import * as Yup from "yup";


export const loginFormValidationSchema=Yup.object().shape({
    name:Yup.string().min(2,"Min 2 character required").required("Name is required"),
    email:Yup.string().email().required("Email required"),
    password:Yup.string().required("Password required"),
    gender:Yup.string().required("Required").oneOf(['male','female',"other"],"Must Select One"),
    terms:Yup.boolean().required("Required").oneOf([true],"You must accept the terms")
})