import useLabel from "../../../hooks/HooksAuth/useLabel";
import useChangeVis from "../../../hooks/HooksAuth/useChangeVis";
import useAlert from "../../../hooks/HooksSettings/useAlert";

const useData = (): any => {
  const userNameForLabel = useLabel("");
  const emailForLabel = useLabel("");
  const passwordForLabel = useLabel("");
  const submitPasForLabel = useLabel("");
  const passwordVisibility = useChangeVis();
  const submitPasVisibility = useChangeVis();
  const SettingAlert = useAlert();
  return {
    userNameForLabel,
    emailForLabel,
    passwordForLabel,
    submitPasForLabel,
    passwordVisibility,
    submitPasVisibility,
    SettingAlert,
  };
};

export default useData;
