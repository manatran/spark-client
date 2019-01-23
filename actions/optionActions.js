import {
    UPDATE_OPTIONS,
    UPDATE_PREFERENCES
} from '../constants'
import {
    getSearchResults
} from './searchActions';


export const updateOptions = (options, input) => dispatch => {
    dispatch({
        type: UPDATE_OPTIONS,
        payload: options
    });
    getSearchResults(input, options);
}

export const updatePreferences = (preferences) => dispatch => {
    dispatch({
        type: UPDATE_PREFERENCES,
        payload: preferences
    })
}