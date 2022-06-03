//store
import { store } from "../store";
//api
import { getUserRepos } from "../../api/user.api";
//helpers
import { getUserReposListHelper } from "../../helpers/userReposListHelper/userReposList.helper";
//types
import { AppDispatch } from "../types";
//action types
import { TYPES } from "./userReposList.actionTypes";
import { getUserReposBySearch } from "../../api/userRepos.api";

export const getUserReposByUserName = (userName: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: TYPES.GET_USER_REPOS_LIST });

    getUserRepos(userName)
      .then((response) => {
        const payload = getUserReposListHelper(response.data);

        dispatch({ type: TYPES.GET_USER_REPOS_LIST_SUCCESS, payload });
      })
      .catch((error) => {
        dispatch({
          type: TYPES.GET_USER_REPOS_LIST_ERROR,
          payload: error.message,
        });
      });
  };
};

export const setReposSearch = (repoName: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: TYPES.SET_REPOS_SEARCH_BY_NAME, payload: repoName });

    const userName = store.getState().user.profile.login;

    dispatch(getReposByName(repoName, userName));
  };
};

export const getReposByName = (repoName: string, userName: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: TYPES.GET_USER_REPOS_LIST });

    getUserReposBySearch(repoName, userName)
      .then((response) => {
        dispatch({
          type: TYPES.GET_USER_REPOS_LIST_SUCCESS,
          payload: response.data.items,
        });
      })
      .catch((error) => {
        dispatch({
          type: TYPES.GET_USER_REPOS_LIST_ERROR,
          payload: error.message,
        });
      });
  };
};

export const resetState = () => {
  return {
    type: TYPES.RESET_STATE,
  };
};
