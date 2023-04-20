import * as Yup from "yup";
import { useTranslations } from "../../../../libs/TranslitionProvaider/TranslationProvider";

const useSchemasValidSetting = (): any => {
  const translate = useTranslations();
  const schemaChange = Yup.object({
    email: Yup.string().when({
      is: (val: any) => val.length > 0,
      then: () =>
        Yup.string().required(`${translate.text.emptyField}`).email(`${translate.text.emailError}`),
    }),
    userName: Yup.string().when({
      is: (val: any) => val.length > 0,
      then: () =>
        Yup.string()
          .required(`${translate.text.emptyField}`)
          .min(2, `${translate.text.minLengthError2}`),
    }),
  }).required();

  return {
    schemaChange,
  };
};

export default useSchemasValidSetting;
