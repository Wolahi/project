import React, { ReactElement } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import * as yup from "yup";
import useDataLogin from "./SignInData";
import useSchemasValid from "../../utils/shemasYup";
import { switchSign } from "../../../../../store/authReducer";
import { useTranslations } from "../../../../../libs/TranslitionProvaider/TranslationProvider";

const SignInView = (): ReactElement => {
  const valid = useDataLogin();
  const translations = useTranslations();
  const schemas = useSchemasValid();
  type FormDataLogin = yup.InferType<typeof schemas.schemaLogin>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataLogin>({
    resolver: yupResolver(schemas.schemaLogin),
  });
  const onSubmit = (data: FormDataLogin): void => console.log(data);
  return (
    <div className="sign-form">
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className="head">
          <span>{translations.text.signInHead}</span>
        </div>
        <div className="sign">
          <label htmlFor="Email" className="input-block">
            <span className={valid.emailForLabel.topLabel ? "label-top" : "hide"}>
              {translations.text.email}
            </span>
            <input
              id="Email"
              type="email"
              onAnimationStart={valid.emailForLabel.handleAutoFill}
              onClick={(): void => {
                valid.emailForLabel.onFocus();
              }}
              {...register("email", {
                onChange: (e): void => {
                  valid.emailForLabel.onChange(e.target.value);
                },
                onBlur: (): void => {
                  valid.emailForLabel.onBlur();
                },
              })}
            />
          </label>
          {errors.email ? (
            <div className="error">{errors.email.message as string}</div>
          ) : (
            <div style={{ height: "16px" }} />
          )}
          <label htmlFor="Password" className="input-block">
            <span className={valid.passwordForLabel.topLabel ? "label-top" : "hide"}>
              {translations.text.password}
            </span>
            <input
              id="Password"
              type={valid.passwordVisibility.typeVis}
              onAnimationStart={valid.passwordForLabel.handleAutoFill}
              onClick={(): void => {
                valid.passwordForLabel.onFocus();
              }}
              {...register("password", {
                onChange: (e): void => {
                  valid.passwordForLabel.onChange(e.target.value);
                },
                onBlur: (): void => {
                  valid.passwordForLabel.onBlur();
                },
              })}
            />
            <button
              type="button"
              className="eye"
              onClick={(): void => {
                valid.passwordVisibility.changeVis();
              }}>
              {valid.passwordVisibility.typeVis === "password" ? (
                <AiOutlineEyeInvisible size={25} />
              ) : (
                <AiOutlineEye size={25} />
              )}
            </button>
          </label>
          {errors.password ? (
            <div className="error">{errors.password.message as string}</div>
          ) : (
            <div style={{ height: "12px" }} />
          )}
          <div className="link-forgot">
            <a href="/#">{translations.text.forgotPas}</a>
          </div>
        </div>
        <button type="submit" className="button-enable">
          {translations.text.signIn}
        </button>
      </form>
      <div className="change-form-text">
        <span>
          {translations.text.dontHaveAcc}{" "}
          <a
            href="/#"
            onClick={(): void => {
              valid.dispatch(switchSign());
            }}>
            {translations.text.signUp}
          </a>{" "}
        </span>
      </div>
    </div>
  );
};
export default SignInView;
