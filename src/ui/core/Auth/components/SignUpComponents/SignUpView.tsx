import React, { ReactElement } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useSchemasValid from "../../utils/shemasYup";
import { useTranslations } from "../../../../../libs/TranslitionProvaider/TranslationProvider";
import styles from "../AuthPage.module.scss";
import InputEmail from "../InputBlocksComponent/InputEmail";
import InputPass from "../InputBlocksComponent/InputPass";
import ButtonForgot from "../InputBlocksComponent/Button&Forgot";
import SwitchLogReg from "../InputBlocksComponent/SwitchLogReg";
import InputSubmitPass from "../InputBlocksComponent/InputSubmitPass";
import InputUserName from "../InputBlocksComponent/InputUserName";

const SignUpView = (): ReactElement => {
  const translations = useTranslations();
  const schemas = useSchemasValid();
  type FormDataReg = yup.InferType<typeof schemas.schemaRegister>;
  const methods = useForm<FormDataReg>({
    resolver: yupResolver(schemas.schemaRegister),
  });
  const onSubmit = (data: FormDataReg): void => console.log(data);

  return (
    <div className={styles.root}>
      <div className={styles.logo}>LOGO</div>
      <FormProvider {...methods}>
        <div className={styles.signForm}>
          <form noValidate onSubmit={methods.handleSubmit(onSubmit)}>
            <div className={styles.head}>
              <span>{translations.text.signInHead}</span>
            </div>
            <div className={styles.sign}>
              <InputUserName />
              <InputEmail />
              <InputPass />
              <InputSubmitPass />
              <ButtonForgot sign={translations.text.signUp} signUp />
            </div>
          </form>
          <SwitchLogReg
            text={translations.text.doHaveAcc}
            path="/auth/signIn"
            sign={translations.text.signIn}
          />
        </div>
      </FormProvider>
    </div>
  );
};

export default SignUpView;
