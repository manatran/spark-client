import {
  GET_SEARCH_RESULTS,
  REMOVE_SEARCH_RESULTS,
  SEARCHING,
  UPDATE_SEARCH_HISTORY,
  CLEAR_HISTORY,
  SEARCH_INPUT
} from "../constants";

const initialState = {
  results: null,
  history: [],
  searching: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SEARCH_RESULTS:
      return {
        ...state,
        results: action.payload
      };
    case REMOVE_SEARCH_RESULTS:
      return {
        ...state,
        results: action.payload
      };
    case SEARCH_INPUT:
      return {
        ...state,
        input: action.payload
      };
    case SEARCHING:
      return {
        ...state,
        searching: action.payload
      };
    case UPDATE_SEARCH_HISTORY:
      let historyArr = state.history;
      if (historyArr.length == 3) {
        historyArr.shift();
        return {
          ...state,
          history: historyArr.concat(action.payload)
        }
      } else {
        return {
          ...state,
          history: [...state.history, action.payload]
        }
      }

    case CLEAR_HISTORY:
      return {
        ...state,
        history: []
      }

    default:
      return state;
  }
}