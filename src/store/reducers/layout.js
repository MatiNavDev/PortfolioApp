import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  showSideDrawer: false
};

const setShowSideDrawer = (state, action) =>
  updateObject(state, { showSideDrawer: action.showSideDrawer });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SHOW_SIDEDRAWER:
      return setShowSideDrawer(state, action);
    default:
      return state;
  }
};

export default reducer;
