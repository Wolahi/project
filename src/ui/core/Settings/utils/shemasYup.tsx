import * as Yup from "yup";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from "react-i18next";

const useSchemasValidSetting = (): any => {
  const { t } = useTranslation();
  const schemaChange = Yup.object({
    email: Yup.string()
      .when({
        is: (val: any) => val.length > 0,
        then: () => Yup.string().email(`${t("errors.emailError")}`),
      })
      .required(`${t("errors.emptyField")}`),
    userName: Yup.string()
      .when({
        is: (val: any) => val.length > 0,
        then: () => Yup.string().min(2, `${t("errors.minLengthError2")}`),
      })
      .required(`${t("errors.emptyField")}`),
  }).required();

  return {
    schemaChange,
  };
};

export default useSchemasValidSetting;
