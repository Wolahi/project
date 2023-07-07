import React, { ReactElement, useEffect, useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import Cookies from "universal-cookie";
// eslint-disable-next-line import/no-extraneous-dependencies
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
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
import ChangeLang from "../../../utils/ChangeLangButt/ChangeLang";

const SignInView = (): ReactElement => {
  const { t } = useTranslation();
  const schemas = useSchemasValid();
  type FormDataLogin = yup.InferType<typeof schemas.schemaLogin>;
  const methods = useForm<FormDataLogin>({
    resolver: yupResolver(schemas.schemaLogin),
  });
  const navigate = useNavigate();
  const [resAuth, setresAuth] = useState(null);
  const authtorize = async (user: FormDataLogin): Promise<any> => {
    await fetch("http://localhost:8080/auth/signIn", {
      method: "POST",
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((result) => {
        const cookies = new Cookies();
        cookies.set("user", result[0].token, { path: "/" });
        console.log(cookies.get("user"));
        setresAuth(result[0].res);
      });
  };
  useEffect(() => {
    if (resAuth) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, [resAuth]);
  const onSubmit = (data: FormDataLogin): void => {
    authtorize(data);
  };

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
              <span>{t("authBlock.signInHead")}</span>
            </div>
            <div className={styles.sign}>
              <InputEmail />
              <InputPass />
              {resAuth === false && (
                <div className={styles.errorSignIn}>{t("errors.signInError")}</div>
              )}
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
