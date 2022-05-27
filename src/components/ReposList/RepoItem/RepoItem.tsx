//general
import React from "react";
//types
import { IRepo } from "../../../store/userReposList/userReposList.types";
//styles
import styles from "./styles.module.scss";

interface IRepoItemComponent {
  repo: IRepo;
}

const RepoItem: React.FC<IRepoItemComponent> = ({ repo }) => {
  return (
    <li className={styles.item}>
      <span className={styles.name}>{repo.name}</span>
      <div className={styles.dataContainer}>
        <span className={styles.data}>
          {repo.forks_count} <b>Forks</b>
        </span>

        <span className={styles.data}>
          {repo.stargazers_count} <b>Stars</b>
        </span>
      </div>
    </li>
  );
};

export default RepoItem;
