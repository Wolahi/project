import * as yup from "yup";
import { useTranslations } from "../../../../libs/TranslitionProvaider/TranslationProvider";

const useSchemasValid = (): any => {
  const translate = useTranslations();
  const schemaLogin = yup
    .object({
      email: yup
        .string()
        .required(`${translate.text.emptyField}`)
        .email(`${translate.text.emailError}`),
      password: yup
        .string()
        .required(`${translate.text.emptyField}`)
        .min(8, `${translate.text.minLengthError8}`),
    })
    .required();

  const schemaRegister = yup.object({
    userName: yup
      .string()
      .required(`${translate.text.emptyField}`)
      .min(2, `${translate.text.minLengthError2}`),
    email: yup
      .string()
      .required(`${translate.text.emptyField}`)
      .email(`${translate.text.emailError}`),
    password: yup
      .string()
      .required(`${translate.text.emptyField}`)
      .min(8, `${translate.text.minLengthError8}`),
    submitPassword: yup
      .string()
      .required(`${translate.text.emptyField}`)
      .min(8, `${translate.text.minLengthError8}`)
      .oneOf([yup.ref("password")], `${translate.text.passMustBeMatch}`),
  });

  return {
    schemaLogin,
    schemaRegister,
  };
};

export default useSchemasValid;
