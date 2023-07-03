import React, { ReactElement, useEffect } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// eslint-disable-next-line import/no-extraneous-dependencies
import * as yup from "yup";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from "react-i18next";
import useSchemasValid from "../../utils/shemasYup";
import styles from "../AuthPage.module.scss";
import InputEmail from "../InputBlocksComponent/InputEmail";
import InputPass from "../InputBlocksComponent/InputPass";
import ButtonForgot from "../InputBlocksComponent/Button&Forgot";
import SwitchLogReg from "../InputBlocksComponent/SwitchLogReg";
import InputSubmitPass from "../InputBlocksComponent/InputSubmitPass";
import InputUserName from "../InputBlocksComponent/InputUserName";
import ChangeLang from "../../../utils/ChangeLangButt/ChangeLang";

const SignUpView = (): ReactElement => {
  const { t } = useTranslation();
  const schemas = useSchemasValid();
  type FormDataReg = yup.InferType<typeof schemas.schemaRegister>;
  const methods = useForm<FormDataReg>({
    resolver: yupResolver(schemas.schemaRegister),
  });
  const onSubmit = (user: FormDataReg): void => console.log(user);

  useEffect((): any => {
    console.log("qwe");
    fetch("http://localhost:8080/auth/signUp", {
      method: "POST",
      body: new URLSearchParams({
        email: "qwe@bk.ru",
        password: "Строка",
        userName: "федя",
      }),
      headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" },
    });
  }, []);
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.lang}>
          <ChangeLang />
        </div>
        <div className={styles.logo}>LOGO</div>
      </div>
      <FormProvider {...methods}>
        <div className={styles.signForm}>
          <form noValidate onSubmit={methods.handleSubmit(onSubmit)}>
            <div className={styles.head}>
              <span>{t("authBlock.signUpHead")}</span>
            </div>
            <div className={styles.sign}>
              <InputUserName />
              <InputEmail />
              <InputPass />
              <InputSubmitPass />
              <ButtonForgot sign={t("authBlock.signUp")} signUp />
            </div>
          </form>
          <SwitchLogReg
            text={t("authBlock.footerBlock.doHaveAcc")}
            path="/auth/signIn"
            sign={t("authBlock.signIn")}
          />
        </div>
      </FormProvider>
    </div>
  );
};

export default SignUpView;
