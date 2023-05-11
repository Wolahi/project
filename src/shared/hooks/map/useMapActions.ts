import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { mapAction } from "../../../store/map/map.slice";

const allActions = {
  ...mapAction,
};

const useActions = (): any => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
};

export default useActions;
