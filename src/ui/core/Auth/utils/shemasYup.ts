import * as Yup from "yup";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from "react-i18next";

const useSchemasValid = (): any => {
  const { t } = useTranslation();
  const schemaLogin = Yup.object({
    email: Yup.string()
      .when({
        is: (val: any) => val.length > 0,
        then: () => Yup.string().email(`${t("errors.emailError")}`),
      })
      .required(`${t("errors.emptyField")}`),
    password: Yup.string()
      .when({
        is: (val: any) => val.length > 0,
        then: () => Yup.string().min(8, `${t("errors.minLengthError8")}`),
      })
      .required(`${t("errors.emptyField")}`),
  }).required();

  const schemaRegister = Yup.object({
    userName: Yup.string()
      .when({
        is: (val: any) => val.length > 0,
        then: () => Yup.string().min(2, `${t("errors.minLengthError2")}`),
      })
      .required(`${t("errors.emptyField")}`),
    email: Yup.string()
      .when({
        is: (val: any) => val.length > 0,
        then: () => Yup.string().email(`${t("errors.emailError")}`),
      })
      .required(`${t("errors.emptyField")}`),
    password: Yup.string()
      .when({
        is: (val: any) => val.length > 0,
        then: () => Yup.string().min(8, `${t("errors.minLengthError8")}`),
      })
      .required(`${t("errors.emptyField")}`),
    submitPassword: Yup.string()
      .when({
        is: (val: any) => val.length > 0,
        then: () =>
          Yup.string()
            .min(8, `${t("errors.minLengthError8")}`)
            .oneOf([Yup.ref("password")], `${t("errors.passMustBeMatch")}`),
      })
      .required(`${t("errors.emptyField")}`),
  });

  return {
    schemaLogin,
    schemaRegister,
  };
};

export default useSchemasValid;
