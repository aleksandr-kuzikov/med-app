import { combineReducers } from "redux";
import { sheldueReducer } from "./sheldueReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  sheldue: sheldueReducer
})