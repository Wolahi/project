import { useState } from "react";
import useAlert from "../../../hooks/HooksSettings/useAlert";

const useData = (): any => {
  const [showNicknameChange, setShowNicknameChange] = useState(false);
  const [showEmailChange, setShowEmailChange] = useState(false);
  const SettingAlert = useAlert();
  return {
    showNicknameChange,
    showEmailChange,
    SettingAlert,
    setShowNicknameChange,
    setShowEmailChange,
  };
};

export default useData;
