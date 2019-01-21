import { GET_SEARCH_TERM, REMOVE_SEARCH_TERM, SEARCHING } from "../constants";

const initialState = {
  term: null,
  searching: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SEARCH_TERM:
      return {
        ...state,
        term: action.payload
      };
    case REMOVE_SEARCH_TERM:
      return {
        ...state,
        term: action.payload
      };
    case SEARCHING:
      return {
        ...state,
        searching: action.payload
      };
    default:
      return state;
  }
}