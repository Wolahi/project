import { ReactElement } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { FormProvider, useForm } from "react-hook-form";
// eslint-disable-next-line import/no-extraneous-dependencies
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import useSchemasValidSetting from "../../utils/shemasYup";
import styles from "./SettingModalPage.module.scss";
import InputChangedEmail from "./components/inputChangeEmail";
import InputChangedNickName from "./components/inputChagedNickName";

const SettingModalPage = (props: any): ReactElement => {
  const modalProps = props;
  const schemas = useSchemasValidSetting();
  const { t } = useTranslation();
  type FormDataChange = yup.InferType<typeof schemas.schemaChange>;
  const methods = useForm<FormDataChange>({
    resolver: yupResolver(schemas.schemaChange),
  });
  const onSubmit = (data: FormDataChange): void => {
    console.log(data);
  };
  return (
    <div>
      {modalProps.show && (
        <FormProvider {...methods}>
          <form noValidate onSubmit={methods.handleSubmit(onSubmit)}>
            <div className={styles.settingModalPageStyle}>
              {modalProps.isNickName && <InputChangedNickName />}
              {modalProps.isEmail && <InputChangedEmail />}
              <button type="submit" className={styles.Save}>
                {t("settingsPage.save")}
              </button>
              <button
                type="button"
                className={styles.Cancel}
                onClick={(): void => modalProps.setShow(false)}>
                {t("settingsPage.cancel")}
              </button>
            </div>
          </form>
        </FormProvider>
      )}
    </div>
  );
};

export default SettingModalPage;
