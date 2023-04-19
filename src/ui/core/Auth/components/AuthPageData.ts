import useLabel from "../../../hooks/useLabel";
import useChangeVis from "../../../hooks/useChangeVis";

const useData = (): any => {
  const userNameForLabel = useLabel("");
  const emailForLabel = useLabel("");
  const passwordForLabel = useLabel("");
  const submitPasForLabel = useLabel("");
  const passwordVisibility = useChangeVis();
  const submitPasVisibility = useChangeVis();
  return {
    userNameForLabel,
    emailForLabel,
    passwordForLabel,
    submitPasForLabel,
    passwordVisibility,
    submitPasVisibility,
  };
};

export default useData;
