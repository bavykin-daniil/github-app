//action types
import { TYPES } from "./userProfile.actionTypes";

export interface IUserProfile {
  profile: {
    avatar_url: string;
    login: string;
    email: null | string;
    location: null | string;
    created_at: string;
    followers: number;
    following: number;
    bio: null | string;
  };
  loading: boolean;
  error: null | string;
}

interface getUserProfileAction {
  type: TYPES.GET_USER_PROFILE;
}

interface getUserProfileSuccessAction {
  type: TYPES.GET_USER_PROFILE_SUCCESS;
  payload: IUserProfile;
}

interface getUserProfileErrorAction {
  type: TYPES.GET_USER_PROFILE_ERROR;
  payload: string;
}

export type IAction =
  | getUserProfileAction
  | getUserProfileSuccessAction
  | getUserProfileErrorAction;
