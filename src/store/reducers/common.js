import * as actionTypes from "../actions/actionTypes";

import { updateObject } from "../../shared/utility";

const initialState = {
  isMobile: false
};

const setIsMobile = (state, action) =>
  updateObject(state, { isMobile: action.isMobile });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_IS_MOBILE:
      return setIsMobile(state, action);
    default:
      return state;
  }
};

export default reducer;
