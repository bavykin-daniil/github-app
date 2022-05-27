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

export const setReposSearchByName = (repoName: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: TYPES.SET_REPOS_SEARCH_BY_NAME, payload: repoName });

    const userName = store.getState().user.profile.login;

    if (repoName !== "") {
      getUserRepos(userName)
        .then((response) => {
          const payload = getUserReposListHelper(response.data);
          const searchResult = payload.filter((repo) => repo.name === repoName);

          dispatch({
            type: TYPES.GET_USER_REPOS_LIST_SUCCESS,
            payload: searchResult,
          });
        })
        .catch((error) => {
          dispatch({
            type: TYPES.GET_USER_REPOS_LIST_ERROR,
            payload: error,
          });
        });
    } else {
      dispatch(getUserReposByUserName(userName));
    }
  };
};

export const resetState = () => {
  return {
    type: TYPES.RESET_STATE,
  };
};
