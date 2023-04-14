import React, { ReactElement, useState } from "react";
import "../../../style/SettingPage.scss";
import SettingModalPage from "../modal/SettingModalPage";
import Alert from "../modal/Alert";

const SettingPage = (): ReactElement => {
  const [showNicknameChange, setShowNicknameChange] = useState(false);
  const [showEmailChange, setShowEmailChange] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [textAlert, setTextAlert] = useState("");

  return (
    <div>
      <div className="setting-page-style">
        <h1>Settings</h1>
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
              onClick={(): void => {
                setTextAlert(`You changed your nickname`);
                setShowAlert(true);
                setShowNicknameChange(true);
              }}>
              Change
            </button>
          )}
          <SettingModalPage show={showNicknameChange} setShow={setShowNicknameChange} />
        </div>
        <div className="text-block">
          <h2>Email address</h2>
          <div>
            Your email address is <span className="text-bold">test@email.com</span>
          </div>
          {showEmailChange ? (
            <div />
          ) : (
            <button
              type="button"
              onClick={(): void => {
                setTextAlert(`You changed your email`);
                setShowAlert(true);
                setShowEmailChange(true);
              }}>
              Change
            </button>
          )}
          <SettingModalPage show={showEmailChange} setShow={setShowEmailChange} />
        </div>
        <div className="text-block">
          <h2>Password</h2>
          You can request a new password to your email
          <button
            type="button"
            onClick={(): void => {
              setTextAlert(`A password reset link has been sent to your email`);
              setShowAlert(true);
            }}>
            Request
          </button>
        </div>
        <div className="text-block">
          <h2>Delete account</h2>
          Permanently delete this account?
          <button
            type="button"
            onClick={(): void => {
              setTextAlert(`You have deleted your account`);
              setShowAlert(true);
            }}>
            Delete
          </button>
        </div>
      </div>
      <Alert active={showAlert} setActive={setShowAlert} text={textAlert} />
    </div>
  );
};

export default SettingPage;
