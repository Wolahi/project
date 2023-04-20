import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import styles from "./SideBar.module.scss";

const SideBar = (): ReactElement => {
  return (
    <aside className={styles.root}>
      <ul className={styles.links}>
        <li>
          <NavLink to="/">
            {({ isActive }): ReactElement => (
              <span className={isActive ? styles.active : styles.pending}>
                <div className={isActive ? styles.blockActive : styles.blockPending} />
                Map
              </span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings">
            {({ isActive }): ReactElement => (
              <span className={isActive ? styles.active : styles.pending}>
                <div className={isActive && styles.blockActive} /> Settings{" "}
              </span>
            )}
          </NavLink>
        </li>
      </ul>
      <div className={styles.buttonSignIN}>
        <NavLink to="/auth/signIn">
          <span> Sign In </span>
        </NavLink>
      </div>
    </aside>
  );
};
export default SideBar;
