const switchLang = (): any => {
  return {
    type: "SWITCH_LANG",
  };
};
const ShowAlert = (value: any): any => {
  return {
    type: "ShowAlert",
    ShowAlert: value,
  };
};
const SetText = (value: any): any => {
  return {
    type: "SetText",
    TextAlert: value,
  };
};
export { switchLang, ShowAlert, SetText };
