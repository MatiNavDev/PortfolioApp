import * as actionTypes from "../actions/actionTypes";
import { setLoading, updateObject } from "../../shared/utility";

const initialState = {
  loading: false,
  tecnologiesImgWithText: [],
  proyectsImgWithText: [],
  toggleOptionChosed: "P"
};

const fetchProjectsImgWithTextSuccess = (state, action) =>
  updateObject(state, {
    proyectsImgWithText: action.proyectsImgWithText,
    loading: false
  });

const fetchTecnologiesWithTextSuccess = (state, action) =>
  updateObject(state, {
    tecnologiesImgWithText: action.tecnologiesImgWithText,
    loading: false
  });

const setToggleHandler = (state, action) =>
  updateObject(state, { toggleOptionChosed: action.toggleOptionChosed });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PROYECTS_IMG_WITH_TEXT_START:
      return setLoading(state, true);
    case actionTypes.FETCH_TECNOLOGIES_WITH_TEXT_START:
      return setLoading(state, true);
    case actionTypes.FETCH_PROYECTS_IMG_WITH_TEXT_SUCCESS:
      return fetchProjectsImgWithTextSuccess(state, action);
    case actionTypes.FETCH_TECNOLOGIES_WITH_TEXT_SUCCESS:
      return fetchTecnologiesWithTextSuccess(state, action);
    case actionTypes.SET_TOGGLE_HANDLER:
      return setToggleHandler(state, action);
    default:
      return state;
  }
};

export default reducer;
