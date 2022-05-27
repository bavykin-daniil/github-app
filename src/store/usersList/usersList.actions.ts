//types
import { AppDispatch } from "../types";
import { TYPES } from "./usersList.actionTypes";
//api
import { getUser } from "../../api/user.api";
import { getUsersList } from "../../api/users.api";
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
      dispatch(getUserByName(searchValue));
    } else {
      dispatch(getUsers());
    }
  };
};

export const getUserByName = (userName: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: TYPES.GET_USERS });

    getUser(userName)
      .then((response) => {
        const user: IUserProp = response.data;
        const userPayload = {
          avatar_url: user.avatar_url,
          events_url: user.events_url,
          followers_url: user.followers_url,
          following_url: user.following_url,
          gists_url: user.gists_url,
          gravatar_id: user.gravatar_id,
          html_url: user.html_url,
          id: user.id,
          login: user.login,
          node_id: user.node_id,
          organizations_url: user.organizations_url,
          received_events_url: user.received_events_url,
          repos_url: user.repos_url,
          site_admin: user.site_admin,
          starred_url: user.starred_url,
          subscriptions_url: user.subscriptions_url,
          type: user.type,
          url: user.url,
          repos: response.data.public_repos,
        };

        dispatch({ type: TYPES.GET_USERS_SUCCESS, payload: [userPayload] });
      })
      .catch((error) => {
        dispatch({ type: TYPES.GET_USERS_ERROR, payload: error.message });
      });
  };
};
