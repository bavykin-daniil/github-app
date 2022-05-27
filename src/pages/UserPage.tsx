//general
import React from "react";
//hooks
import useAppDispatch from "../hooks/useAppDispatch";
//actions
import {
  resetState,
  setReposSearchByName,
} from "../store/userReposList/userReposList.actions";
//components
import UserProfile from "../components/UserProfile/UserProfile";
import ReposList from "../components/ReposList/ReposList";
import Search from "../components/Search/Search";
//styles
import "../styles/pages.scss";

const UserPage = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    return () => {
      dispatch(resetState());
    };
  }, [dispatch]);

  return (
    <div className="page userPage">
      <h1 className="title">GitHub searcher</h1>
      <UserProfile />
      <Search
        scope="userRepos"
        searchFunction={setReposSearchByName}
        placeholder="Search for user repos"
      />
      <ReposList />
    </div>
  );
};

export default UserPage;
