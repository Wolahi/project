import React, { ReactElement } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { FormProvider, useForm } from "react-hook-form";
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
import ChangeLang from "../../../ChangeLangButt/ChangeLang";

const SignInView = (): ReactElement => {
  const { t } = useTranslation();
  const schemas = useSchemasValid();
  type FormDataLogin = yup.InferType<typeof schemas.schemaLogin>;
  const methods = useForm<FormDataLogin>({
    resolver: yupResolver(schemas.schemaLogin),
  });
  const onSubmit = (data: FormDataLogin): void => console.log(data);
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.logo}>LOGO</div>
        <ChangeLang />
      </div>
      <FormProvider {...methods}>
        <div className={styles.signForm}>
          <form noValidate onSubmit={methods.handleSubmit(onSubmit)}>
            <div className={styles.head}>
              <span>{t("authBlock.signInHead")}</span>
            </div>
            <div className={styles.sign}>
              <InputEmail />
              <InputPass />
              <ButtonForgot sign={t("authBlock.signIn")} signUp={false} />
            </div>
          </form>
          <SwitchLogReg
            text={t("authBlock.footerBlock.dontHaveAcc")}
            path="/auth/signUp"
            sign={t("authBlock.signUp")}
          />
        </div>
      </FormProvider>
    </div>
  );
};
export default SignInView;
