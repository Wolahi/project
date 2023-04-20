import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import styles from "./SideBar.module.scss";

const SideBar = (): ReactElement => {
  return (
    <div className={styles.root}>
      <div className={styles.menu}>
        <div className={styles.links}>
          <NavLink to="/">
            {({ isActive }): ReactElement => (
              <span className={isActive ? styles.active : styles.pending}>
                <div className={isActive ? styles.blockActive : styles.blockPending} />
                Map{" "}
              </span>
            )}
          </NavLink>
          <NavLink to="/settings">
            {({ isActive }): ReactElement => (
              <span className={isActive ? styles.active : styles.pending}>
                {" "}
                <div className={isActive && styles.blockActive} /> Settings{" "}
              </span>
            )}
          </NavLink>
        </div>
      </div>
      <div className={styles.buttonSignIN}>
        <NavLink to="/auth/signIn">
          <span> Sign In </span>
        </NavLink>
      </div>
    </div>
  );
};
export default SideBar;
