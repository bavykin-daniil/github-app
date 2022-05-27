//general
import React from "react";
import { useParams } from "react-router-dom";
//api
import { getUserProfile } from "../../store/userProfile/userProfile.actions";
//hooks
import useAppDispatch from "../../hooks/useAppDispatch";
import useTypedSelector from "../../hooks/useTypedSelector";
//ui
import Loader from "../../ui/Loader/Loader";
//styles
import styles from "./styles.module.scss";
import moment from "moment";

const UserProfile = () => {
  const dispatch = useAppDispatch();
  const { profile, loading, error } = useTypedSelector((state) => state.user);

  const params = useParams();

  React.useEffect(() => {
    if (params.id) {
      dispatch(getUserProfile(params.id));
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
      <div className={styles.mainData}>
        <div className={styles.avatarContainer}>
          <img
            className={styles.avatar}
            src={profile.avatar_url}
            alt={profile.login}
          />
        </div>

        <div className={styles.profileData}>
          <span className={styles.data}>
            <b>User name:</b> {profile.login}
          </span>
          <span className={styles.data}>
            <b>Email:</b> {profile.email || "User don`t have email"}
          </span>
          <span className={styles.data}>
            <b>Location:</b> {profile.location}
          </span>
          <span className={styles.data}>
            <b>Join date:</b> {moment(profile.created_at).format("L")}
          </span>
          <span className={styles.data}>
            {profile.followers} <b>followers</b>
          </span>
          <span className={styles.data}>
            <b>Following:</b> {profile.following}
          </span>
        </div>
      </div>

      <div className={styles.bio}>
        {profile.bio ||
          "This user may have a biography, but now it does not exist, maybe in the future it will appear"}
      </div>
    </div>
  );
};

export default UserProfile;
