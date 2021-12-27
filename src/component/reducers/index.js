import saveReducer from "./SaveReducer.js";
import { combineReducers } from 'redux';


const allReducers = combineReducers({
    saveList: saveReducer
}); 

export default allReducers;