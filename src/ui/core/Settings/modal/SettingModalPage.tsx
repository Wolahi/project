import React, { ReactElement } from "react";
import "../../../style/SettingModalPage.scss";

const SettingModalPage = (props: any): ReactElement => {
  const modalProps = props;
  return (
    <div>
      {modalProps.show ? (
        <div className="setting-modal-page-style">
          <textarea cols={30} className="item-1" required />
          <button type="button" className="item-2">
            Save
          </button>
          <button type="button" className="item-3" onClick={(): void => modalProps.setShow(false)}>
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
