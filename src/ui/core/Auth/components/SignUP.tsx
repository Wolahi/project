import React, { ReactElement } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import useInput from "../../../hooks/Valid";
import { switchSign } from "../../../../store/authReducer";

const SignUP = (): ReactElement => {
  const email = useInput({
    initialValue: "",
    validations: { isEmpty: true, minLength: 7, maxLength: 25, isEmail: true },
  });
  const password = useInput({
    initialValue: "",
    validations: { isEmpty: true, minLength: 8, maxLength: 25 },
  });
  const submitPassword = useInput({
    initialValue: "",
    validations: {
      isEmpty: true,
      minLength: 8,
      maxLength: 25,
      isSubmit: password.value,
    },
  });
  const userName = useInput({
    initialValue: "",
    validations: { isEmpty: true, minLength: 2, maxLength: 255 },
  });
  const dispatch = useDispatch();
  return (
    <div className="sign-form">
      <form noValidate>
        <div className="head">
          <span>Sign up to --- TODO ---</span>
        </div>
        <div className="sign">
          <div className="input-block">
            <input
              id="Name"
              value={userName.value}
              onChange={(e: React.ChangeEvent): void => userName.onChange(e)}
              onBlur={(e: React.ChangeEvent): void => userName.onBlur(e)}
              onFocus={(e: React.ChangeEvent): void => userName.onFocus(e)}
            />
            {userName.labelFocus ? (
              // eslint-disable-next-line jsx-a11y/label-has-associated-control
              <label className="label-top" htmlFor="Name">
                Name
              </label>
            ) : (
              // eslint-disable-next-line jsx-a11y/label-has-associated-control
              <label htmlFor="Name">Name</label>
            )}
          </div>
          {userName.isDirty &&
          (userName.isEmpty || userName.minLengthError || userName.maxLengthError) ? (
            <div className="error">{userName.errorText}</div>
          ) : (
            <div style={{ height: "16px" }} />
          )}
          <div className="input-block">
            <input
              id="Email"
              type="email"
              value={email.value}
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
          (password.isEmpty || password.minLengthError || password.maxLengthError) ? (
            <div className="error">{password.errorText}</div>
          ) : (
            <div style={{ height: "12px" }} />
          )}
          <div className="link-forgot">
            <a href="/#"> </a>
          </div>
          <div className="input-block">
            <input
              name="SubmitPassword"
              value={submitPassword.value}
              type={submitPassword.typeVis}
              onChange={(e: React.ChangeEvent): void => submitPassword.onChange(e)}
              onBlur={(e: React.ChangeEvent): void => submitPassword.onBlur(e)}
              onFocus={(e: React.ChangeEvent): void => submitPassword.onFocus(e)}
            />
            {submitPassword.labelFocus ? (
              // eslint-disable-next-line jsx-a11y/label-has-associated-control
              <label className="label-top" htmlFor="SubmitPassword">
                Submit password
              </label>
            ) : (
              // eslint-disable-next-line jsx-a11y/label-has-associated-control
              <label htmlFor="SubmitPassword">Submit password</label>
            )}
            <button
              type="button"
              className="eye"
              onClick={(): void => {
                submitPassword.changeVis();
              }}>
              {submitPassword.typeVis === "password" ? (
                <AiOutlineEyeInvisible size={25} />
              ) : (
                <AiOutlineEye size={25} />
              )}
            </button>
          </div>
          {submitPassword.isDirty &&
          (submitPassword.isEmpty ||
            submitPassword.minLengthError ||
            submitPassword.maxLengthError ||
            submitPassword.submitPassword) ? (
            <div className="error">{submitPassword.errorText}</div>
          ) : (
            <div style={{ height: "12px" }} />
          )}
          <div className="link-forgot">
            <a href="/#"> </a>
          </div>
        </div>
        <button
          type="button"
          disabled={
            !email.inputValid ||
            !password.inputValid ||
            !submitPassword.inputValid ||
            !userName.inputValid
          }
          className={
            !email.inputValid ||
            !password.inputValid ||
            !submitPassword.inputValid ||
            !userName.inputValid
              ? "button-disabled"
              : "button-enable"
          }>
          Sign up
        </button>
      </form>
      <div className="change-form-text">
        <span>
          Do you have an account yet?{" "}
          <a
            href="/#"
            onClick={(): void => {
              dispatch(switchSign());
            }}>
            Sign in
          </a>
        </span>
      </div>
    </div>
  );
};

export default SignUP;
