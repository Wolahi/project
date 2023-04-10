import React, { useState } from "react";
import SettingModalPage from "../modal/SettingModalPage";

function TextBlock(textName, nickOrEmail) {
  const [showNicknameChange, setShowNicknameChange] = useState(false);
  const [showEmailChange, setShowEmailChange] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [textAlert, setTextAlert] = useState("");

  return (
    <div className="text-block">
      <h2>User nickname</h2>
      <div>
        Yor nickname is <span className="text-bold">mr.ananasick</span>
      </div>
      {showNicknameChange ? (
        <div />
      ) : (
        <button
          type="button"
          onClick={() => {
            setTextAlert(`You changed your nickname`);
            setShowAlert(true);
            setShowNicknameChange(true);
          }}>
          Change
        </button>
      )}
      <SettingModalPage show={showNicknameChange} setShow={setShowNicknameChange} />
    </div>
  );
}

export default TextBlock;
