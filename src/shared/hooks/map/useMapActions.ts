import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { mapAction } from "../../../store/map/map.slice";
import { pointAction } from "../../../store/map/point.slice";

const allActions = {
  ...mapAction,
  ...pointAction,
};

const useActions = (): any => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
};

export default useActions;
