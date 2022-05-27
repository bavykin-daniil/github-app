//types
import { IUserRepo } from "./userReposList.types";

export const getUserReposListHelper = (userReposList: [IUserRepo]) => {
  return userReposList.map((repo) => {
    return {
      id: repo.id,
      name: repo.name,
      forks_count: repo.forks_count,
      stargazers_count: repo.stargazers_count,
    };
  });
};
