import {
    UPDATE_OPTIONS,
    UPDATE_PREFERENCES
} from '../constants';

const initialState = {
    options: [],
    displayPreferences: {
        quick: true,
        forecast: true
    }
}


export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_OPTIONS:
            return {
                ...state,
                options: action.payload
            }

        case UPDATE_PREFERENCES:
            return {
                ...state,
                displayPreferences: action.payload
            }
        default:
            return state;
    }
}