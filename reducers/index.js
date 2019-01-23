import {
  combineReducers
} from 'redux';
import locationReducer from "./locationReducer";
import searchReducer from "./searchReducer";
import optionReducer from './optionReducer';

export default combineReducers({
  location: locationReducer,
  search: searchReducer,
  option: optionReducer
})