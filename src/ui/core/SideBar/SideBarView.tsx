import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./SideBar.module.scss";
import ChangeLang from "../ChangeLangButt/ChangeLang";

const SideBar = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <aside className={styles.root}>
      <ChangeLang />
      <ul className={styles.links}>
        <li>
          <NavLink to="/">
            {({ isActive }): ReactElement => (
              <span className={isActive ? styles.active : styles.pending}>
                <div className={isActive ? styles.blockActive : styles.blockPending} />
                {t("sideBar.map")}
              </span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings">
            {({ isActive }): ReactElement => (
              <span className={isActive ? styles.active : styles.pending}>
                <div className={isActive && styles.blockActive} /> {t("sideBar.settings")}
              </span>
            )}
          </NavLink>
        </li>
      </ul>
      <div className={styles.buttonSignIN}>
        <NavLink to="/auth/signIn">
          <span> {t("sideBar.signIn")} </span>
        </NavLink>
      </div>
    </aside>
  );
};
export default SideBar;
