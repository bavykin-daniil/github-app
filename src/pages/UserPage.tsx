//general
import React from "react";
//components
import UserProfile from "../components/UserProfile/UserProfile";
//styles
import "../styles/pages.scss";

const UserPage = () => {
  return (
    <div className="page userPage">
      <h1 className="title">GitHub searcher</h1>
      <UserProfile />
    </div>
  );
};

export default UserPage;
