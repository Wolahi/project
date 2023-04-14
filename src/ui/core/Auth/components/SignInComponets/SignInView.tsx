import React, { ReactElement } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FormDataLogin, schemaLogin } from "./SignInData";
import { useLabel, useChangeVis } from "./SignInController";

const SignInView = (): ReactElement => {
  const emailForLabel = useLabel("");
  const passwordForLabel = useLabel("");
  const passwordVisibility = useChangeVis();
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
          <div className="input-block">
            <input
              id="Email"
              type="email"
              onClick={(): void => {
                emailForLabel.onFocus();
              }}
              {...register("email", {
                onChange: (e): void => {
                  emailForLabel.onChange(e.target.value);
                },
                onBlur: (): void => {
                  emailForLabel.onBlur();
                },
              })}
            />
            {emailForLabel.topLabel ? (
              // eslint-disable-next-line jsx-a11y/label-has-associated-control
              <label className="label-top" htmlFor="Email">
                Email
              </label>
            ) : (
              // eslint-disable-next-line jsx-a11y/label-has-associated-control
              <label htmlFor="Email">Email</label>
            )}
          </div>
          {errors.email ? (
            <div className="error">{errors.email.message}</div>
          ) : (
            <div style={{ height: "16px" }} />
          )}
          <div className="input-block">
            <input
              id="Password"
              type={passwordVisibility.typeVis}
              onClick={(): void => {
                passwordForLabel.onFocus();
              }}
              {...register("password", {
                onChange: (e): void => {
                  passwordForLabel.onChange(e.target.value);
                },
                onBlur: (): void => {
                  passwordForLabel.onBlur();
                },
              })}
            />
            {passwordForLabel.topLabel ? (
              // eslint-disable-next-line jsx-a11y/label-has-associated-control
              <label className="label-top" htmlFor="Email">
                Password
              </label>
            ) : (
              // eslint-disable-next-line jsx-a11y/label-has-associated-control
              <label htmlFor="Email">Password</label>
            )}
            <button
              type="button"
              className="eye"
              onClick={(): void => {
                passwordVisibility.changeVis();
              }}>
              {passwordVisibility.typeVis === "password" ? (
                <AiOutlineEyeInvisible size={25} />
              ) : (
                <AiOutlineEye size={25} />
              )}
            </button>
          </div>
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
          Don’t have an account yet? <a href="/#">Sign up</a>
        </span>
      </div>
    </div>
  );
};
export default SignInView;
