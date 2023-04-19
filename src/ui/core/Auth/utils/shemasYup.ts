import * as Yup from "yup";
import { useTranslations } from "../../../../libs/TranslitionProvaider/TranslationProvider";

const useSchemasValid = (): any => {
  const translate = useTranslations();
  const schemaLogin = Yup.object({
    email: Yup.string().when({
      is: (val: any) => val.length > 0,
      then: () =>
        Yup.string().required(`${translate.text.emptyField}`).email(`${translate.text.emailError}`),
    }),
    password: Yup.string().when({
      is: (val: any) => val.length > 0,
      then: () =>
        Yup.string()
          .required(`${translate.text.emptyField}`)
          .min(8, `${translate.text.minLengthError8}`),
    }),
  }).required();

  const schemaRegister = Yup.object({
    userName: Yup.string().when({
      is: (val: any) => val.length > 0,
      then: () =>
        Yup.string()
          .required(`${translate.text.emptyField}`)
          .min(2, `${translate.text.minLengthError2}`),
    }),
    email: Yup.string().when({
      is: (val: any) => val.length > 0,
      then: () =>
        Yup.string().required(`${translate.text.emptyField}`).email(`${translate.text.emailError}`),
    }),
    password: Yup.string().when({
      is: (val: any) => val.length > 0,
      then: () =>
        Yup.string()
          .required(`${translate.text.emptyField}`)
          .min(8, `${translate.text.minLengthError8}`),
    }),
    submitPassword: Yup.string().when({
      is: (val: any) => val.length > 0,
      then: () =>
        Yup.string()
          .required(`${translate.text.emptyField}`)
          .min(8, `${translate.text.minLengthError8}`)
          .oneOf([Yup.ref("password")], `${translate.text.passMustBeMatch}`),
    }),
  });

  return {
    schemaLogin,
    schemaRegister,
  };
};

export default useSchemasValid;
