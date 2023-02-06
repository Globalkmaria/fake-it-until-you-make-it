import React, { MouseEvent } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import styles from "./Layout.module.scss";
import { useRecoilState, useResetRecoilState } from "recoil";
import { LanguageAtom, goalStateAtom } from "../../store/card";
import {
  resetLocal,
  resetTextLocal,
  saveLanguageInLocal,
} from "../../utils/local";
import { LanguageText } from "../../lang/layout";

export function Layout() {
  const navigate = useNavigate();
  const resetGoal = useResetRecoilState(goalStateAtom);
  const [language, setLanguage] = useRecoilState(LanguageAtom);
  const onLanguageChange = (e: MouseEvent<HTMLButtonElement>): void => {
    const isCurrentLanguageKR = language === "KR";
    const nextLanguage = isCurrentLanguageKR ? "EN" : "KR";
    saveLanguageInLocal(nextLanguage);
    setLanguage(nextLanguage);
  };

  const onHomeClick = () => {
    resetLocal();
    resetTextLocal();
    resetGoal();

    navigate("/");
  };

  const languageText = LanguageText[language];

  return (
    <div className={styles["layout__wrapper"]}>
      <div className={styles["layout__container"]}>
        <nav>
          <div className={styles["nav__left"]}>
            <button
              onClick={onLanguageChange}
              id={language}
              className={`button button--small ${styles.language}`}
            >
              {languageText}
            </button>
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
