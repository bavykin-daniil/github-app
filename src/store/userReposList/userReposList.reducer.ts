//types
import { TYPES } from "./userReposList.actionTypes";
//action types
import { IAction, IUserReposReducerState } from "./userReposList.types";

const initialState: IUserReposReducerState = {
  repos: [],
  search: "",
  loading: false,
  error: null,
};

export const userReposListReducer = (
  state = initialState,
  action: IAction
): IUserReposReducerState => {
  switch (action.type) {
    case TYPES.GET_USER_REPOS_LIST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case TYPES.GET_USER_REPOS_LIST_SUCCESS:
      return {
        ...state,
        repos: [...action.payload],
        loading: false,
      };

    case TYPES.GET_USER_REPOS_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case TYPES.SET_REPOS_SEARCH_BY_NAME:
      return {
        ...state,
        loading: true,
        search: action.payload,
      };

    case TYPES.RESET_STATE: {
      return {
        repos: [],
        search: "",
        loading: false,
        error: null,
      };
    }

    default:
      return state;
  }
};
