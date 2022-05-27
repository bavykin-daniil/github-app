//types
import { getUserProfileHelperProps } from "./userPorofile.types";

export const getUserProfileHelper = (
  userProfile: getUserProfileHelperProps
) => {
  return {
    avatar_url: userProfile.avatar_url,
    login: userProfile.login,
    email: userProfile.email,
    location: userProfile.location,
    created_at: userProfile.created_at,
    followers: userProfile.followers,
    following: userProfile.following,
    bio: userProfile.bio,
  };
};
