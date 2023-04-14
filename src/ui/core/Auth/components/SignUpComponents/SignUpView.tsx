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
          <div className="input-block">
            <input
              id="Name"
              type="text"
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
            {valid.userNameForLabel.topLabel ? (
              // eslint-disable-next-line jsx-a11y/label-has-associated-control
              <label className="label-top" htmlFor="Name">
                Name
              </label>
            ) : (
              // eslint-disable-next-line jsx-a11y/label-has-associated-control
              <label htmlFor="Name">Name</label>
            )}
          </div>
          {errors.userName ? (
            <div className="error">{errors.userName.message}</div>
          ) : (
            <div style={{ height: "16px" }} />
          )}
          <div className="input-block">
            <input
              id="Email"
              type="email"
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
            {valid.emailForLabel.topLabel ? (
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
              type={valid.passwordVisibility.typeVis}
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
            {valid.passwordForLabel.topLabel ? (
              // eslint-disable-next-line jsx-a11y/label-has-associated-control
              <label className="label-top" htmlFor="Password">
                Password
              </label>
            ) : (
              // eslint-disable-next-line jsx-a11y/label-has-associated-control
              <label htmlFor="Password">Password</label>
            )}
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
          </div>
          {errors.password ? (
            <div className="error">{errors.password.message}</div>
          ) : (
            <div style={{ height: "12px" }} />
          )}
          <div className="input-block">
            <input
              id="SubmitPassword"
              type={valid.submitPasVisibility.typeVis}
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
            {valid.submitPasForLabel.topLabel ? (
              // eslint-disable-next-line jsx-a11y/label-has-associated-control
              <label className="label-top" htmlFor="SubmitPassword">
                Submit Password
              </label>
            ) : (
              // eslint-disable-next-line jsx-a11y/label-has-associated-control
              <label htmlFor="SubmitPassword">Submit Password</label>
            )}
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
          </div>
          {errors.submitPassword ? (
            <div className="error">{errors.submitPassword.message}</div>
          ) : (
            <div style={{ height: "12px" }} />
          )}
          <button type="submit" className="button-enable">
            Sign In
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
            Sign up
          </a>{" "}
        </span>
      </div>
    </div>
  );
};
export default SignInView;
