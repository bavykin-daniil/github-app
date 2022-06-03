//types
import { AppDispatch } from "../types";
import { TYPES } from "./usersList.actionTypes";
//api
import { getUser } from "../../api/user.api";
import { getUsersBySearch, getUsersList } from "../../api/users.api";
//action types
import { IUserProp } from "../../components/UsersList/types";

export const getUsers = () => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: TYPES.GET_USERS });

    getUsersList()
      .then((response) => {
        getAmountRepos(response.data).then((response) => {
          dispatch({ type: TYPES.GET_USERS_SUCCESS, payload: response });
        });
      })
      .catch((error) => {
        dispatch({ type: TYPES.GET_USERS_ERROR, payload: error.message });
      });
  };
};

const getAmountRepos = async (list: [IUserProp]) => {
  if (list.length) {
    const listWithRepos = list.map(async (item) => {
      const repos = await getUser(item.login).then((response) => {
        return response.data.public_repos;
      });

      return { ...item, repos };
    });

    return Promise.all(listWithRepos);
  } else {
    return list;
  }
};

export const setSearch = (searchValue: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: TYPES.SET_USERS_SEARCH_BY_NAME, payload: searchValue });

    if (searchValue) {
      dispatch(getUsersByName(searchValue));
    } else {
      dispatch(getUsers());
    }
  };
};

export const getUsersByName = (userName: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: TYPES.GET_USERS });

    getUsersBySearch(userName)
      .then((response) => {
        getAmountRepos(response.data.items).then((response) => {
          dispatch({ type: TYPES.GET_USERS_SUCCESS, payload: response });
        });
      })
      .catch((error) => {
        dispatch({ type: TYPES.GET_USERS_ERROR, payload: error.message });
      });
  };
};
