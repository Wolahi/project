import React, { ReactElement } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useSchemasValid from "../../utils/shemasYup";
import { useTranslations } from "../../../../../libs/TranslitionProvaider/TranslationProvider";
import styles from "../AuthPage.module.scss";
import InputEmail from "../InputBlocksComponent/InputEmail";
import InputPass from "../InputBlocksComponent/InputPass";
import ButtonForgot from "../InputBlocksComponent/Button&Forgot";
import SwitchLogReg from "../InputBlocksComponent/SwitchLogReg";

const SignInView = (): ReactElement => {
  const translations = useTranslations();
  const schemas = useSchemasValid();
  type FormDataLogin = yup.InferType<typeof schemas.schemaLogin>;
  const methods = useForm<FormDataLogin>({
    resolver: yupResolver(schemas.schemaLogin),
  });
  const onSubmit = (data: FormDataLogin): void => console.log(data);
  return (
    <div className={styles.authPage}>
      <div className={styles.logo}>LOGO</div>
      <FormProvider {...methods}>
        <div className={styles.signForm}>
          <form noValidate onSubmit={methods.handleSubmit(onSubmit)}>
            <div className={styles.head}>
              <span>{translations.text.signInHead}</span>
            </div>
            <div className={styles.sign}>
              <InputEmail />
              <InputPass />
              <ButtonForgot sign={translations.text.signIn} signUp={false} />
            </div>
          </form>
          <SwitchLogReg
            text={translations.text.dontHaveAcc}
            path="/auth/signUp"
            sign={translations.text.signUp}
          />
        </div>
      </FormProvider>
    </div>
  );
};
export default SignInView;
