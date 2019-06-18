import * as actionTypes from "../actions/actionTypes";
import { setLoading, updateObject } from "../../shared/utility";

const initialState = {
  topicIdSelected: 0,
  topics: [],
  loading: false
};

const fetchTopicsSuccess = (state, action) =>
  updateObject(state, {
    topics: action.topics,
    loading: false,
    topicIdSelected: 1
  });

const setSelectedTopic = (state, action) =>
  updateObject(state, { topicIdSelected: action.topicIdSelected });

//TODO: ver el error en el fetch topics
const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TOPICS_START:
      return setLoading(state, true);
    case actionTypes.FETCH_TOPICS_SUCCESS:
      return fetchTopicsSuccess(state, action);
    case actionTypes.SELECT_TOPIC_ID:
      return setSelectedTopic(state, action);
    default:
      return state;
  }
};
export default reducers;
