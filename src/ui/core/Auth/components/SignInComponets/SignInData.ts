// eslint-disable-next-line import/no-extraneous-dependencies
import * as yup from "yup";

const schemaLogin = yup
  .object({
    email: yup.string().required("This field cannot be empty").email("Please enter valid email"),
    password: yup
      .string()
      .required("This field cannot be empty")
      .min(8, "Please enter at least 8 characters"),
  })
  .required();
type FormDataLogin = yup.InferType<typeof schemaLogin>;

export { schemaLogin, FormDataLogin };
