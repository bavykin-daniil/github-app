//types
import { IAction, IUserProfile } from "./userProfile.types";
//action types
import { TYPES } from "./userProfile.actionTypes";

const initialState: IUserProfile = {
  profile: {
    avatar_url: "",
    login: "",
    email: null,
    location: null,
    created_at: "",
    followers: 0,
    following: 0,
    bio: null,
  },
  loading: false,
  error: null,
};

export const userProfileReducer = (
  state = initialState,
  action: IAction
): IUserProfile => {
  switch (action.type) {
    case TYPES.GET_USER_PROFILE:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case TYPES.GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, ...action.payload },
        loading: false,
      };

    case TYPES.GET_USER_PROFILE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
