//general
import React from "react";
import { useNavigate } from "react-router-dom";
//hooks
import useTypedSelector from "../../hooks/useTypedSelector";
import useAppDispatch from "../../hooks/useAppDispatch";
//types
import Loader from "../../ui/Loader/Loader";
//actions
import { getUsers } from "../../store/usersList/usersList.actions";
//components
import UserItem from "./UserItem/UserItem";
//styles
import styles from "./styles.module.scss";

const UsersList = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    list: usersList,
    loading,
    error,
    search,
  } = useTypedSelector((state) => state.users);

  React.useEffect(() => {
    if (!usersList.length) {
      dispatch(getUsers());
    }
    // eslint-disable-next-line
  }, [dispatch]);

  const handleClickOnUser = (userName: string) => {
    navigate(`/user/${userName}`);
  };

  if (loading)
    return (
      <div className={styles.container}>
        <Loader />
      </div>
    );

  if (error)
    return (
      <div className={styles.container}>
        <p className={styles.notFound}>{error}</p>
      </div>
    );

  if (search && !usersList.length)
    return (
      <div className={styles.container}>
        <p className={styles.notFound}>
          Sorry, but we don't find anything by your query: `{search}`
        </p>
      </div>
    );

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {usersList?.map((user) => (
          <UserItem
            key={user.id}
            user={user}
            onClick={() => {
              handleClickOnUser(user.login);
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
