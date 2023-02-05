import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import styles from "./Layout.module.scss";
import { useRecoilState } from "recoil";
import { isKRAtom } from "../../store/card";
import {
  resetLocal,
  resetTextLocal,
  saveLanguageInLocal,
} from "../../utils/local";

export function Layout() {
  const navigate = useNavigate();

  const [isKR, setIsKR] = useRecoilState(isKRAtom);
  const onLanguageChange = (): void => {
    saveLanguageInLocal(!isKR);
    setIsKR(!isKR);
  };

  const onHomeClick = () => {
    resetLocal();
    resetTextLocal();
    navigate("/");
  };

  return (
    <div className={styles["layout__wrapper"]}>
      <div className={styles["layout__container"]}>
        <nav>
          <div className={styles["nav__left"]}>
            <button
              onClick={onLanguageChange}
              className={`button button--small ${styles.language}`}
            >
              {isKR ? "EN" : "한글"}
            </button>
            {/* <div className="button--small">
              <BsFonts />
            </div> */}
          </div>
          <div className={styles["nav__right"]}>
            <button onClick={onHomeClick}>
              <div className={`button button--small ${styles.home}`}>
                <AiFillHome />
              </div>
            </button>
          </div>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
