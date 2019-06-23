import * as actionTypes from "../actions/actionTypes";
import { setLoading, updateObject } from "../../shared/utility";

const initialState = {
  loading: false,
  cards: [],
  error: null
};

const fetchOpinionCardSuccess = (state, action) =>
  updateObject(state, { loading: false, error: null, cards: action.cards });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_OPINION_CARDS_START:
      return setLoading(state, true);
    case actionTypes.FETCH_OPINION_CARDS_SUCCESS:
      return fetchOpinionCardSuccess(state, action);

    default:
      return state;
  }
};

export default reducer;
