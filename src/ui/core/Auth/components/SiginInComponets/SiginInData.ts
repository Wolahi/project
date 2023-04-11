// eslint-disable-next-line import/no-extraneous-dependencies
import * as yup from "yup";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Schema } from "yup";

const shcmeaLogin: Schema = yup
  .object({
    emali: yup.string().required("This field cannot be empty").email("Please enter valid email"),
    password: yup
      .string()
      .required("This field cannot be empty")
      .min(8, "Please enter at least 8 characters"),
  })
  .required();
type FormDataLogin = yup.InferType<typeof shcmeaLogin>;

export { shcmeaLogin, FormDataLogin };
