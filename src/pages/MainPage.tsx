//general
import React from "react";
//actions
import { setSearch } from "../store/usersList/usersList.actions";
//components
import UsersList from "../components/UsersList/UsersList";
import Search from "../components/Search/Search";
//styles
import "../styles/pages.scss";

const MainPage = () => {
  return (
    <div className="page mainPage">
      <h1 className="title">GitHub searcher</h1>
      <Search
        scope="users"
        searchFunction={setSearch}
        placeholder={"Search for users"}
      />
      <UsersList />
    </div>
  );
};

export default MainPage;
