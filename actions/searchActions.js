import {
  GET_SEARCH_RESULTS,
  REMOVE_SEARCH_RESULTS,
  SEARCHING,
  UPDATE_SEARCH_HISTORY,
  CLEAR_HISTORY,
  SEARCH_INPUT
} from '../constants';
import { Location, Permissions } from "expo";
import { store } from "./../store";


// Get search results
export const getSearchResults = (term, options) => dispatch => {
  dispatch({
    type: SEARCHING,
    payload: true
  });
  console.log(options)
  Permissions.askAsync(Permissions.LOCATION).then(location => {
    if (location.status === "granted") {
      if (term === "Current location") {
        const lat = store.getState().location.location.coords.latitude;
        const long = store.getState().location.location.coords.longitude;
        fetch(`http://10.120.4.6:3000/search?lat=${lat}&lng=${long}&radius=10`)
          .then(res => res.json())
          .then(res => {
            dispatch({
              type: GET_SEARCH_RESULTS,
              payload: res
            });
            dispatch({
              type: SEARCHING,
              payload: false
            });
          })
          .catch(err => {
            console.log(err);
            dispatch({
              type: SEARCHING,
              payload: false
            });

          })
      } else {
        Location.geocodeAsync(term).then(loc => {
          loc = loc[0];
          if (loc) {
            fetch(`http://10.120.4.6:3000/search?lat=${loc.latitude}&lng=${loc.longitude}&radius=10`)
              .then(res => res.json())
              .then(res => {
                dispatch({
                  type: GET_SEARCH_RESULTS,
                  payload: res
                });
                dispatch({
                  type: SEARCHING,
                  payload: false
                });
              })
              .catch(err => {
                console.log(err);
                dispatch({
                  type: SEARCHING,
                  payload: false
                });
              })
          } else {
            console.log("Address not found");
          }
        }).catch(err => console.log(err));
      }
    }
  })
}

export const setSearchInput = (term) => dispatch => {
  dispatch({
    type: SEARCH_INPUT,
    payload: term
  });
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