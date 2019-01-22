import { GET_LOCATION, REMOVE_LOCATION, GET_LOCATION_ERROR } from '../constants';
import { Location, Permissions } from "expo";

// Get location
export const getLocation = () => dispatch => {
  const location = Permissions.askAsync(Permissions.LOCATION);
  if (location === "granted") {
    Location.watchPositionAsync({
      timeout: 5000,
      maximumAge: 5000
    }, position => {
      dispatch({
        type: GET_LOCATION,
        payload: position
      });
    }, err => {
      dispatch({
        type: GET_LOCATION_ERROR,
        payload: err
      });
    })

  } else {
    dispatch({
      type: GET_LOCATION_ERROR,
      payload: "No permission granted"
    });
  }
}

export const removeLocation = () => dispatch => {
  dispatch({
    type: REMOVE_LOCATION,
    payload: null
  });
}