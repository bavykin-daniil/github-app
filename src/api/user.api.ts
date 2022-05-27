import axios from "axios";

export const getUser = (userName: string) => {
  const response = axios.get(`https://api.github.com/users/${userName}`);
  return response;
};
