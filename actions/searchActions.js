import { GET_SEARCH_TERM, REMOVE_SEARCH_TERM, SEARCHING } from '../constants';

// Get search term
export const getSearchTerm = (term) => dispatch => {
  dispatch({
    type: GET_SEARCH_TERM,
    payload: term
  });
  dispatch({
    type: SEARCHING,
    payload: true
  });
}

export const removeSearchTerm = () => dispatch => {
  dispatch({
    type: REMOVE_SEARCH_TERM,
    payload: null
  });
  dispatch({
    type: SEARCHING,
    payload: false
  });
}
