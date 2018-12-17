import { GET_FORECAST } from "./../constants/forecastConstants";

const initialState = {
  forecast: {}
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_FORECAST:
			return {
				...state,
				forecast: action.payload
			};
		default:
			return state;
	}
}