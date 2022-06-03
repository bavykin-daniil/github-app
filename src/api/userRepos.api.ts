//general
import axios from "axios";

export const getUserReposBySearch = (repoName: string, userName: string) => {
  const response = axios.get(
    `https://api.github.com/search/repositories?q=${repoName}+user:${userName}`
  );
  return response;
};
