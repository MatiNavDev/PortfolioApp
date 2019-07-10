import * as actionTypes from "../actions/actionTypes";
import { setLoading, updateObject } from "../../shared/utility";

const initialState = {
  detailedCardFetched: {},
  errorFromFetch: null,
  loading: true
};

const fetchDetailedCardSuccess = (state, action) =>
  updateObject(state, {
    detailedCardFetched: action.detailedCardFetched,
    loading: false
  });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DETAILED_CARD_START:
      return setLoading(state, true);
    case actionTypes.FETCH_DETAILED_CARD_SUCCESS:
      return fetchDetailedCardSuccess(state, action);

    default:
      return state;
  }
};

export default reducer;
