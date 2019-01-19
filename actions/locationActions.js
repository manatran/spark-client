import { GET_LOCATION, GET_LOCATION_ERROR } from '../constants';

// Get location
export const getLocation = () => dispatch =>  {
  navigator.geolocation.watchPosition(position => {
    dispatch({
      type: GET_LOCATION,
      payload: position
    })
  }, err => {
    dispatch({
      type: GET_LOCATION_ERROR,
      payload: err
    })
  },
    {
      timeout: 5000,
      maximumAge: 5000
    });
}