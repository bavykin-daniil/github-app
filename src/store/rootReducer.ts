//general
import { combineReducers } from "redux";
//reducers
import { usersListReducer } from "./usersList/usersList.reducer";

export const rootReducer = combineReducers({
  users: usersListReducer,
});
