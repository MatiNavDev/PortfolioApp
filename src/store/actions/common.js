import * as actionTypes from "./actionTypes";

const setIsMobile = isMobile => {
  return {
    type: actionTypes.SET_IS_MOBILE,
    isMobile
  };
};

export { setIsMobile };
