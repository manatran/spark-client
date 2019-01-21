import { GET_SEARCH_RESULTS, REMOVE_SEARCH_RESULTS, SEARCHING } from '../constants';

// Get search results
export const getSearchResults = (term) => dispatch => {
  dispatch({
    type: SEARCHING,
    payload: true
  });
  setTimeout(() => {
    dispatch({
      type: GET_SEARCH_RESULTS,
      payload: term
    });
    dispatch({
      type: SEARCHING,
      payload: false
    });
  }, 5000)
}

// Remove search results
export const removeSearchResults = () => dispatch => {
  dispatch({
    type: REMOVE_SEARCH_RESULTS,
    payload: null
  });
  dispatch({
    type: SEARCHING,
    payload: false
  });
}
