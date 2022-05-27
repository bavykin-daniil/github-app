//general
import axios from "axios";

export const getUser = (userName: string) => {
  const response = axios.get(`https://api.github.com/users/${userName}`);
  return response;
};

export const getUserRepos = (userName: string, repoName?: string) => {
  const response = axios.get(
    `https://api.github.com/users/${userName}/repos?per_page=5&name=${repoName}`
  );
  return response;
};
