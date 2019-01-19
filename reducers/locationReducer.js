import { GET_LOCATION, GET_LOCATION_ERROR } from "../constants/locationConstants";

const initialState = {
  location: null,
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LOCATION:
      return {
        ...state,
        location: action.payload
      };
    case GET_LOCATION_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}