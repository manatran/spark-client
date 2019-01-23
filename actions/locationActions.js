import { GET_LOCATION, REMOVE_LOCATION, GET_LOCATION_ERROR } from '../constants';
import { Location, Permissions } from "expo";

// Get location
export const getLocation = () => dispatch => {
  Permissions.askAsync(Permissions.LOCATION).then(location => {
    if (location.status === "granted") {
      Location.getProviderStatusAsync().then(status => {
        if (status.locationServicesEnabled) {
          Location.watchPositionAsync({ distanceInterval: 100, timeInterval: 5000 },
            position => {
              dispatch({
                type: GET_LOCATION,
                payload: position
              });
            }
          )
        } else {
          dispatch({
            type: GET_LOCATION_ERROR,
            payload: "Location services not enabled"
          });
        }
      })
    } else {
      dispatch({
        type: GET_LOCATION_ERROR,
        payload: "No permission granted"
      });
    }
  });
}

export const removeLocation = () => dispatch => {
  dispatch({
    type: REMOVE_LOCATION,
    payload: null
  });
}