//general
import React from "react";
import { useParams } from "react-router-dom";
//hooks
import useAppDispatch from "../../hooks/useAppDispatch";
import useTypedSelector from "../../hooks/useTypedSelector";
//actions
import { getUserReposByUserName } from "../../store/userReposList/userReposList.actions";
import Loader from "../../ui/Loader/Loader";
//components
import RepoItem from "./RepoItem/RepoItem";
//styles
import styles from "./styles.module.scss";

const ReposList = () => {
  const dispatch = useAppDispatch();
  const { repos, error, loading } = useTypedSelector(
    (state) => state.userRepos
  );

  const params = useParams();

  React.useEffect(() => {
    if (params.id) {
      dispatch(getUserReposByUserName(params.id));
    }
  }, [dispatch, params.id]);

  if (loading) {
    return (
      <div className={styles.container}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <p className={styles.notFound}>{error}</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {repos?.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </ul>
    </div>
  );
};

export default ReposList;
