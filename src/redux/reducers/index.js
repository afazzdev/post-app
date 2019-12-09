import { combineReducers } from "redux";
import authReducer from "./authReducer";
import SettingReducer from "./SettingReducer";

export default combineReducers({
  isAuth: authReducer,
  setting: SettingReducer
});
