// eslint-disable-next-line import/no-extraneous-dependencies
import { Schema } from "yup";
// eslint-disable-next-line import/no-extraneous-dependencies
import * as yup from "yup";

const schemaRegister: Schema = yup.object({
  userName: yup
    .string()
    .required("This field cannot be empty")
    .min(2, "Please enter at least 2 characters"),
  email: yup.string().required("This field cannot be empty").email("Please enter valid email"),
  password: yup
    .string()
    .required("This field cannot be empty")
    .min(8, "Please enter at least 8 characters"),
  submitPassword: yup
    .string()
    .required("This field cannot be empty")
    .min(8, "Please enter at least 8 characters")
    .oneOf([yup.ref("password")], "Passwords must match"),
});
type FormDataReg = yup.InferType<typeof schemaRegister>;

export { schemaRegister, FormDataReg };
