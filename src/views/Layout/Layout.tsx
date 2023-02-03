import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { GrLanguage } from "react-icons/gr";
import { AiFillHome } from "react-icons/ai";
import { BsFonts } from "react-icons/bs";
import { Link } from "react-router-dom";
import styles from "./Layout.module.scss";
import { useRecoilState } from "recoil";
import { isKRAtom } from "../../store/card";

export function Layout(): ReactNode {
  const [isKR, setIsKR] = useRecoilState(isKRAtom);

  return (
    <div className={styles["layout__wrapper"]}>
      <div className={styles["layout__container"]}>
        <nav>
          <div className={styles["nav__left"]}>
            <button
              onClick={() => setIsKR((prev) => !prev)}
              className={`button button--small ${styles.language}`}
            >
              {isKR ? "EN" : "한글"}
            </button>
            {/* <div className="button--small">
              <BsFonts />
            </div> */}
          </div>
          <div className={styles["nav__right"]}>
            <Link to={"/"}>
              <div className="button button--small">
                <AiFillHome />
              </div>
            </Link>
          </div>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
