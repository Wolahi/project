import React, { ReactElement } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import useDataReg from "./SignUPData";
import { schemaRegister, FormDataReg } from "../../utils/shemasYup";
import { switchSign } from "../../../../../store/authReducer";

const SignInView = (): ReactElement => {
  const valid = useDataReg();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataReg>({
    resolver: yupResolver(schemaRegister),
  });
  const onSubmit = (data: FormDataReg): void => console.log(data);
  return (
    <div className="sign-form">
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className="head">
          <span>Sign up to --- TODO ---</span>
        </div>
        <div className="sign">
          <label htmlFor="Name" className="input-block">
            <span className={valid.userNameForLabel.topLabel ? "label-top" : "hide"}>Name</span>
            <input
              id="Name"
              type="text"
              onAnimationStart={(e): void => {
                valid.userNameForLabel.handleAutoFill(e);
              }}
              onClick={(): void => {
                valid.userNameForLabel.onFocus();
              }}
              {...register("userName", {
                onChange: (e): void => {
                  valid.userNameForLabel.onChange(e.target.value);
                },
                onBlur: (): void => {
                  valid.userNameForLabel.onBlur();
                },
              })}
            />
          </label>
          {errors.userName ? (
            <div className="error">{errors.userName.message}</div>
          ) : (
            <div style={{ height: "16px" }} />
          )}
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
          <label htmlFor="SubmitPassword" className="input-block">
            <span className={valid.submitPasForLabel.topLabel ? "label-top" : "hide"}>
              Submit Password
            </span>
            <input
              id="SubmitPassword"
              type={valid.submitPasVisibility.typeVis}
              onAnimationStart={(e): void => {
                valid.submitPasForLabel.handleAutoFill(e);
              }}
              onClick={(): void => {
                valid.submitPasForLabel.onFocus();
              }}
              {...register("submitPassword", {
                onChange: (e): void => {
                  valid.submitPasForLabel.onChange(e.target.value);
                },
                onBlur: (): void => {
                  valid.submitPasForLabel.onBlur();
                },
              })}
            />
            <button
              type="button"
              className="eye"
              onClick={(): void => {
                valid.submitPasVisibility.changeVis();
              }}>
              {valid.submitPasVisibility.typeVis === "password" ? (
                <AiOutlineEyeInvisible size={25} />
              ) : (
                <AiOutlineEye size={25} />
              )}
            </button>
          </label>
          {errors.submitPassword ? (
            <div className="error">{errors.submitPassword.message}</div>
          ) : (
            <div style={{ height: "12px" }} />
          )}
          <button type="submit" className="button-enable">
            Sign Up
          </button>
        </div>
      </form>
      <div className="change-form-text">
        <span>
          Do you have an account yet?{" "}
          <a
            href="/#"
            onClick={(): void => {
              valid.dispatch(switchSign());
            }}>
            Sign in
          </a>{" "}
        </span>
      </div>
    </div>
  );
};
export default SignInView;
