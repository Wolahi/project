import { useEffect, useState } from "react";

const useValidation = ({ value, validations }: { value: string; validations: any }): any => {
  const [isEmpty, setEmptyError] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [inputValid, setInputValid] = useState(false);
  const [submitPassword, setSubmitPassword] = useState(false);
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    let ok = false;
    const validArr = Object.keys(validations);
    for (let i = 0; i < validArr.length; i += 1) {
      switch (validArr[i]) {
        case "minLength":
          if (value.length < validations[validArr[i]]) {
            ok = true;
            setMinLengthError(true);
            setErrorText(`Please enter at least ${validations[validArr[i]]} characters`);
          } else {
            setMinLengthError(false);
          }
          break;
        case "isEmpty":
          if (value === "") {
            ok = true;
            setEmptyError(true);
            setErrorText("This field cannot be empty");
          } else {
            setEmptyError(false);
          }
          break;
        case "maxLength":
          if (value.length > validations[validArr[i]]) {
            ok = true;
            setMaxLengthError(true);
            setErrorText(`Must be less than ${validations[validArr[i]]} characters`);
          } else {
            setMaxLengthError(false);
          }
          break;
        case "isEmail":
          if (
            String(value)
              .toLowerCase()
              .match(
                // eslint-disable-next-line max-len
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              )
          ) {
            setEmailError(false);
          } else {
            setEmailError(true);
            setErrorText("Please enter valid email");
            ok = true;
          }
          break;
        case "isSubmit":
          if (validations[validArr[i]] !== value) {
            setSubmitPassword(true);
            setErrorText("Submit password must be equals password");
            ok = true;
          } else {
            setSubmitPassword(false);
          }

          break;
        default:
          break;
      }
      if (ok) {
        break;
      }
    }
  }, [validations, value]);

  useEffect(() => {
    if (isEmpty || minLengthError || maxLengthError || emailError || submitPassword)
      setInputValid(false);
    else setInputValid(true);
  }, [isEmpty, minLengthError, maxLengthError, emailError, submitPassword]);

  return {
    isEmpty,
    minLengthError,
    maxLengthError,
    emailError,
    errorText,
    submitPassword,
    inputValid,
  };
};

const useInput = ({ initialValue, validations }: { initialValue: any; validations: any }): any => {
  const [value, setValue] = useState(initialValue);
  const [typeVis, setTypeVis] = useState("password");
  const [isDirty, setDirty] = useState(false);
  const [labelFocus, setLabelFocus] = useState(false);
  const valid = useValidation({ value, validations });
  const onFocus = (): void => {
    setLabelFocus(true);
  };

  const changeVis = (): void => {
    if (typeVis === "password") {
      setTypeVis("text");
    } else {
      setTypeVis("password");
    }
  };

  const onChange = (e: any): void => {
    setValue(e.target.value);
    setDirty(false);
    e.target.style.border = "none";
  };
  const onBlur = (e: any): void => {
    if (
      valid.isEmpty ||
      valid.minLengthError ||
      valid.emailError ||
      valid.maxLengthError ||
      valid.submitPassword
    ) {
      setDirty(true);
      e.target.style.border = "1px solid red";
    } else {
      setDirty(false);
    }
    if (valid.isEmpty) {
      setLabelFocus(false);
    }
  };

  return {
    value,
    onChange,
    onBlur,
    onFocus,
    changeVis,
    isDirty,
    labelFocus,
    typeVis,
    ...valid,
  };
};

export default useInput;
