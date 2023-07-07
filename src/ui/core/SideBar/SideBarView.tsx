import { ReactElement } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import Cookies from "universal-cookie";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./SideBar.module.scss";
import ChangeLang from "../utils/ChangeLangButt/ChangeLang";

const SideBar = (): ReactElement => {
  const { t } = useTranslation();
  const Exit = (): any => {
    const cookies = new Cookies();
    cookies.remove("user");
  };
  return (
    <aside className={styles.root}>
      <div className={styles.lang}>
        <ChangeLang />
      </div>
      <ul className={styles.links}>
        <li>
          <NavLink to="/">
            {({ isActive }): ReactElement => (
              <span className={isActive ? styles.active : styles.pending}>
                <div className={isActive ? styles.blockActive : ""} />
                {t("sideBar.map")}
              </span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings">
            {({ isActive }): ReactElement => (
              <span className={isActive ? styles.active : styles.pending}>
                <div className={isActive ? styles.blockActive : ""} /> {t("sideBar.settings")}
              </span>
            )}
          </NavLink>
        </li>
      </ul>
      <div className={styles.buttonSignIN}>
        <NavLink to="/auth/signIn">
          <button type="button" onClick={Exit}>
            <span>{t("sideBar.exit")} </span>
          </button>
        </NavLink>
      </div>
    </aside>
  );
};
export default SideBar;
