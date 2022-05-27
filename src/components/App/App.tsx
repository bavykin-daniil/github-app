//general
import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
//pages
import MainPage from "../../pages/MainPage";
import UserPage from "../../pages/UserPage";
//styles
import styles from "./styles.module.scss";

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/user/:id" element={<UserPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
