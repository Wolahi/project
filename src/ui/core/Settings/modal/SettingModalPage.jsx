import React from "react";
import "../../../style/SettingModalPage.scss";

const SettingModalPage = (props) => {
  const modalProps = props;
  return (
    <div>
      {modalProps.show ? (
        <div className="setting-modal-page-style">
          <textarea cols="30" className="item_1" required />
          <button type="button" className="item_2">
            Save
          </button>
          <button type="button" className="item_3" onClick={() => modalProps.setShow(false)}>
            Cancel
          </button>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default SettingModalPage;
