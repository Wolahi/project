// eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDispatch } from "react-redux";
import useLabel from "../hooks/useLabel";
import useChangeVis from "../hooks/useChangeVis";

const useDataReg = (): any => {
  const dispatch = useDispatch();
  const userNameForLabel = useLabel("");
  const emailForLabel = useLabel("");
  const passwordForLabel = useLabel("");
  const submitPasForLabel = useLabel("");
  const passwordVisibility = useChangeVis();
  const submitPasVisibility = useChangeVis();
  return {
    dispatch,
    userNameForLabel,
    emailForLabel,
    passwordForLabel,
    submitPasForLabel,
    passwordVisibility,
    submitPasVisibility,
  };
};

export default useDataReg;
