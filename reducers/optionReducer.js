import {
    UPDATE_OPTIONS
} from '../constants';

const initialState = {
    options: []
}


export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_OPTIONS:
            return {
                ...state,
                options: action.payload
            }
        default:
            return state;
    }
}