import { ReactElement } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { FormProvider, useForm } from "react-hook-form";
import Cookies from "universal-cookie";
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
    resolver: yupResolver(
      modalProps.isEmail ? schemas.schemaEmailChange : schemas.schemaUserNameChange,
    ),
  });
  const ChangeEmail = async (UserEmail: FormDataChange): Promise<any> => {
    await fetch("http://localhost:8080/settings/changeEmail", {
      method: "POST",
      body: JSON.stringify({
        changedEmail: UserEmail,
        userEmail: modalProps.userEmail,
      }),
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result[0].res) {
          const cookies = new Cookies();
          cookies.remove("user");
          cookies.set("user", result[0].token, { path: "/" });
          modalProps.setShowAlert(true);
          modalProps.setTextAlert(t("settingsPage.alertEmail"));
        }
      });
  };
  const ChangeUserName = async (UserName: FormDataChange): Promise<any> => {
    await fetch("http://localhost:8080/settings/changeUserName", {
      method: "POST",
      body: JSON.stringify({
        userName: modalProps.userNickName,
        changedUserName: UserName,
      }),
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result[0].res);
        if (result[0].res) {
          const cookies = new Cookies();
          cookies.remove("user");
          cookies.set("user", result[0].token, { path: "/" });
          modalProps.setShowAlert(true);
          modalProps.setTextAlert(t("settingsPage.alertNickName"));
        }
      });
  };
  const onSubmit = (data: FormDataChange): void => {
    if (modalProps.isEmail) {
      ChangeEmail(data.emailChanged);
    } else {
      ChangeUserName(data.userNameChanged);
    }
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
