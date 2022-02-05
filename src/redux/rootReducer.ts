import { combineReducers } from "redux";
import {allReducer} from "./reducer";
const rootReducer = combineReducers({
    allReducer,
});
export default rootReducer;
