//action types
import { TYPES } from "./userReposList.actionTypes";

export interface IRepo {
  id: number;
  name: string;
  forks_count: number;
  stargazers_count: number;
}

export interface IUserReposReducerState {
  repos: [IRepo] | [];
  search: string;
  loading: boolean;
  error: null | string;
}

interface getUserReposListAction {
  type: TYPES.GET_USER_REPOS_LIST;
}

interface getUserReposListSuccessAction {
  type: TYPES.GET_USER_REPOS_LIST_SUCCESS;
  payload: [IRepo];
}

interface getUserReposListErrorAction {
  type: TYPES.GET_USER_REPOS_LIST_ERROR;
  payload: string;
}

interface setReposSearchByNameAction {
  type: TYPES.SET_REPOS_SEARCH_BY_NAME;
  payload: string;
}

interface resetStateAction {
  type: TYPES.RESET_STATE;
}

export type IAction =
  | getUserReposListAction
  | getUserReposListSuccessAction
  | getUserReposListErrorAction
  | setReposSearchByNameAction
  | resetStateAction;
