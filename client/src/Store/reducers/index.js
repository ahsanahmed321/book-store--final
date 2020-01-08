import { combineReducers } from "redux";
import authReducer from "./authReducer";
import orderReducer from "./orderReducer";
import errorReducer from "../reducers/errorReducer";
import schoolReducer from "./schoolReducer";

export default combineReducers({
  auth: authReducer,
  ord: orderReducer,
  errors: errorReducer,
  school: schoolReducer
});
