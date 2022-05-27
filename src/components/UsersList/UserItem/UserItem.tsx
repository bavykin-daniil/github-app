//general
import React from "react";
//types
import { IUserProp } from "../types";
//styles
import styles from "./styles.module.scss";

interface IUserItemComponent {
  user: IUserProp;
  onClick: () => void;
}

const UserItem: React.FC<IUserItemComponent> = ({ user, onClick }) => {
  return (
    <li className={styles.item} onClick={onClick}>
      <div className={styles.avatarContainer}>
        <img className={styles.avatar} src={user.avatar_url} alt={user.login} />
      </div>
      <span className={styles.name}>
        <b>{user.login}</b>
      </span>
      <span className={styles.repos}>
        <b>Repo: </b>
        <span className={styles.amountRepos}>{user.repos}</span>
      </span>
    </li>
  );
};

export default UserItem;
