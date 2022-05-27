//general
import axios from "axios";

export const getUserReposByName = (repoName: string) => {
  const response = axios.get(
    `https://api.github.com/users/user/repos?name=${repoName}`
  );
  return response;
};
