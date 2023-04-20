import * as Yup from "yup";
import { useTranslations } from "../../../../libs/TranslitionProvaider/TranslationProvider";

const useSchemasValid = (): any => {
  const translate = useTranslations();
  const schemaLogin = Yup.object({
    email: Yup.string()
      .when({
        is: (val: any) => val.length > 0,
        then: () => Yup.string().email(`${translate.text.emailError}`),
      })
      .required(`${translate.text.emptyField}`),
    password: Yup.string()
      .when({
        is: (val: any) => val.length > 0,
        then: () => Yup.string().min(8, `${translate.text.minLengthError8}`),
      })
      .required(`${translate.text.emptyField}`),
  }).required();

  const schemaRegister = Yup.object({
    userName: Yup.string()
      .when({
        is: (val: any) => val.length > 0,
        then: () => Yup.string().min(2, `${translate.text.minLengthError2}`),
      })
      .required(`${translate.text.emptyField}`),
    email: Yup.string()
      .when({
        is: (val: any) => val.length > 0,
        then: () => Yup.string().email(`${translate.text.emailError}`),
      })
      .required(`${translate.text.emptyField}`),
    password: Yup.string()
      .when({
        is: (val: any) => val.length > 0,
        then: () => Yup.string().min(8, `${translate.text.minLengthError8}`),
      })
      .required(`${translate.text.emptyField}`),
    submitPassword: Yup.string()
      .when({
        is: (val: any) => val.length > 0,
        then: () =>
          Yup.string()
            .min(8, `${translate.text.minLengthError8}`)
            .oneOf([Yup.ref("password")], `${translate.text.passMustBeMatch}`),
      })
      .required(`${translate.text.emptyField}`),
  });

  return {
    schemaLogin,
    schemaRegister,
  };
};

export default useSchemasValid;
