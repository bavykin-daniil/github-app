//general
import { combineReducers } from "redux";
//reducers
import { usersListReducer } from "./usersList/usersList.reducer";
import { userProfileReducer } from "./userProfile/userProfile.reducer";

export const rootReducer = combineReducers({
  users: usersListReducer,
  user: userProfileReducer,
});
