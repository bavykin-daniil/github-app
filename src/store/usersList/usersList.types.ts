//types
import { IUserProp } from "../../components/UsersList/types";
//action types
import { TYPES } from "./usersList.actionTypes";

export interface IUsersListState {
  list: [IUserProp] | [];
  error: null | string;
  loading: boolean;
  search: string;
}

interface getUsersAction {
  type: TYPES.GET_USERS;
}

interface getUsersSuccessAction {
  type: TYPES.GET_USERS_SUCCESS;
  payload: [IUserProp];
}

interface getUsersErrorAction {
  type: TYPES.GET_USERS_ERROR;
  payload: string;
}

interface setUsersSearchByNameAction {
  type: TYPES.SET_USERS_SEARCH_BY_NAME;
  payload: string;
}

export type IAction =
  | getUsersAction
  | getUsersSuccessAction
  | getUsersErrorAction
  | setUsersSearchByNameAction;
