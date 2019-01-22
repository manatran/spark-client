import {
  GET_SEARCH_RESULTS,
  REMOVE_SEARCH_RESULTS,
  SEARCHING,
  UPDATE_SEARCH_HISTORY,
  CLEAR_HISTORY
} from '../constants';

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

export const updateSearchHistory = (history) => dispatch => {
  dispatch({
    type: UPDATE_SEARCH_HISTORY,
    payload: history
  })
}

export const clearHistory = () => dispatch => {
  dispatch({
    type: CLEAR_HISTORY,
    payload: null
  })
}