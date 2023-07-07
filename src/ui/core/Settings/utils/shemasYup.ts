import * as Yup from "yup";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from "react-i18next";

const useSchemasValidSetting = (): any => {
  const { t } = useTranslation();
  const schemaEmailChange = Yup.object()
    .shape({
      emailChanged: Yup.string()
        .when({
          is: (val: string) => val?.length > 0,
          then: () => Yup.string().email(`${t("errors.emailError")}`),
        })
        .required(`${t("errors.emptyField")}`),
    })
    .required();
  const schemaUserNameChange = Yup.object().shape({
    userNameChanged: Yup.string()
      .when({
        is: (val: string) => val?.length > 0,
        then: () => Yup.string().min(2, `${t("errors.minLengthError2")}`),
      })
      .required(`${t("errors.emptyField")}`),
  });
  return {
    schemaEmailChange,
    schemaUserNameChange,
  };
};

export default useSchemasValidSetting;
