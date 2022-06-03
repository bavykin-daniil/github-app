//general
import axios from "axios";

export const getUsersList = () => {
  const response = axios.get("https://api.github.com/users?per_page=5");
  return response;
};

export const getUsersBySearch = (userName: string) => {
  const response = axios.get(
    `https://api.github.com/search/users?q=${userName}&per_page=5`
  );
  return response;
};
