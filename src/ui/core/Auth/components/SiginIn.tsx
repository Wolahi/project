import React, { ReactElement } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import useInput from "../../../hooks/Valid";
import { switchSign } from "../../../../store/authReducer";

const SignIn = (): ReactElement => {
  const email = useInput({
    initialValue: "",
    validations: { isEmpty: true, minLength: 7, maxLength: 25, isEmail: true },
  });
  const password = useInput({
    initialValue: "",
    validations: { isEmpty: true, minLength: 8, maxLength: 25 },
  });
  const dispatch = useDispatch();
  return (
    <div className="sign-form">
      <form noValidate>
        <div className="head">
          <span>Sign in to --- TODO ---</span>
        </div>
        <div className="sign">
          <div className="input-block">
            <input
              id="Email"
              value={email.value}
              type="email"
              onChange={(e: React.ChangeEvent): void => email.onChange(e)}
              onBlur={(e: React.ChangeEvent): void => email.onBlur(e)}
              onFocus={(e: React.ChangeEvent): void => email.onFocus(e)}
            />
            {email.labelFocus ? (
              // eslint-disable-next-line jsx-a11y/label-has-associated-control
              <label className="label-top" htmlFor="Email">
                Email
              </label>
            ) : (
              // eslint-disable-next-line jsx-a11y/label-has-associated-control
              <label htmlFor="Email">Email</label>
            )}
          </div>
          {email.isDirty &&
          (email.isEmpty || email.emailError || email.minLengthError || email.maxLengthError) ? (
            <div className="error">{email.errorText}</div>
          ) : (
            <div style={{ height: "16px" }} />
          )}
          <div className="input-block">
            <input
              id="Password"
              value={password.value}
              type={password.typeVis}
              onChange={(e: React.ChangeEvent): void => password.onChange(e)}
              onBlur={(e: React.ChangeEvent): void => password.onBlur(e)}
              onFocus={(e: React.ChangeEvent): void => password.onFocus(e)}
            />
            {password.labelFocus ? (
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
                password.changeVis();
              }}>
              {password.typeVis === "password" ? (
                <AiOutlineEyeInvisible size={25} />
              ) : (
                <AiOutlineEye size={25} />
              )}
            </button>
          </div>
          {password.isDirty &&
          (password.isEmpty ||
            password.emailError ||
            password.minLengthError ||
            password.maxLengthError) ? (
            <div className="error">{password.errorText}</div>
          ) : (
            <div style={{ height: "12px" }} />
          )}
          <div className="link-forgot">
            <a href="/#">Forgot your password?</a>
          </div>
        </div>
        <button
          type="button"
          disabled={!email.inputValid || !password.inputValid}
          className={
            !email.inputValid || !password.inputValid ? "button-disabled" : "button-enable"
          }>
          Sign in
        </button>
      </form>
      <div className="change-form-text">
        <span>
          Don’t have an account yet?{" "}
          <a
            href="/#"
            onClick={(): void => {
              dispatch(switchSign());
            }}>
            Sign up
          </a>
        </span>
      </div>
    </div>
  );
};

export default SignIn;
