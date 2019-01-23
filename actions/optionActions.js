import {
    UPDATE_OPTIONS
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