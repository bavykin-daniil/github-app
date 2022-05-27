//types
import { IAction, IUsersListState } from "./usersList.types";
//action types
import { TYPES } from "./usersList.actionTypes";

const initialState: IUsersListState = {
  list: [],
  error: null,
  loading: false,
  search: "",
};

export const usersListReducer = (
  state = initialState,
  action: IAction
): IUsersListState => {
  switch (action.type) {
    case TYPES.GET_USERS:
      return {
        ...state,
        loading: true,
      };

    case TYPES.GET_USERS_SUCCESS:
      return {
        ...state,
        list: [...action.payload],
        loading: false,
        error: null,
      };

    case TYPES.GET_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case TYPES.SET_USERS_SEARCH_BY_NAME:
      return {
        ...state,
        loading: true,
        search: action.payload,
      };

    default:
      return state;
  }
};
