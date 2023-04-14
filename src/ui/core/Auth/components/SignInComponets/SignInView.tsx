import React, { ReactElement } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import useDataLogin from "./SignInData";
import { schemaLogin, FormDataLogin } from "../../utils/shemasYup";
import { switchSign } from "../../../../../store/authReducer";

const SignInView = (): ReactElement => {
  const valid = useDataLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataLogin>({
    resolver: yupResolver(schemaLogin),
  });
  const onSubmit = (data: FormDataLogin): void => console.log(data);
  return (
    <div className="sign-form">
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className="head">
          <span>Sign in to --- TODO ---</span>
        </div>
        <div className="sign">
          <label htmlFor="Email" className="input-block">
            <span className={valid.emailForLabel.topLabel ? "label-top" : "hide"}>Email</span>
            <input
              id="Email"
              type="email"
              onAnimationStart={(e): void => {
                valid.emailForLabel.handleAutoFill(e);
              }}
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
            <div className="error">{errors.email.message}</div>
          ) : (
            <div style={{ height: "16px" }} />
          )}
          <label htmlFor="Password" className="input-block">
            <span className={valid.passwordForLabel.topLabel ? "label-top" : "hide"}>Password</span>
            <input
              id="Password"
              type={valid.passwordVisibility.typeVis}
              onAnimationStart={(e): void => {
                valid.passwordForLabel.handleAutoFill(e);
              }}
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
            <div className="error">{errors.password.message}</div>
          ) : (
            <div style={{ height: "12px" }} />
          )}
          <div className="link-forgot">
            <a href="/#">Forgot your password?</a>
          </div>
        </div>
        <button type="submit" className="button-enable">
          Sign In
        </button>
      </form>
      <div className="change-form-text">
        <span>
          Don’t have an account yet?{" "}
          <a
            href="/#"
            onClick={(): void => {
              valid.dispatch(switchSign());
            }}>
            Sign up
          </a>{" "}
        </span>
      </div>
    </div>
  );
};
export default SignInView;
