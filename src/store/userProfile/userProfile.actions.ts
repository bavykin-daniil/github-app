//api
import { getUser } from "../../api/user.api";
import { getUserProfileHelper } from "../../helpers/userProfileHelper/userProfileHelper";
//types
import { AppDispatch } from "../types";
//action types
import { TYPES } from "./userProfile.actionTypes";

export const getUserProfile = (userName: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: TYPES.GET_USER_PROFILE });

    getUser(userName)
      .then((response) => {
        const payload = getUserProfileHelper(response.data);

        dispatch({ type: TYPES.GET_USER_PROFILE_SUCCESS, payload });
      })
      .catch((error) => {
        dispatch({
          type: TYPES.GET_USER_PROFILE_ERROR,
          payload: error.message,
        });
      });
  };
};
