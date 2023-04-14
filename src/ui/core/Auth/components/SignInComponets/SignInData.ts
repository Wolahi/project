// eslint-disable-next-line import/no-extraneous-dependencies
import { useDispatch } from "react-redux";
import useLabel from "../hooks/useLabel";
import useChangeVis from "../hooks/useChangeVis";

const useDataLogin = (): any => {
  const dispatch = useDispatch();
  const emailForLabel = useLabel("");
  const passwordForLabel = useLabel("");
  const passwordVisibility = useChangeVis();
  return { dispatch, emailForLabel, passwordForLabel, passwordVisibility };
};

export default useDataLogin;
