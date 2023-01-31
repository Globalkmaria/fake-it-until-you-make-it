import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { GrLanguage } from "react-icons/gr";
import { BsFonts } from "react-icons/bs";
import "./Layout.scss";

export function Layout(): ReactNode {
  return (
    <div className="layout__wrapper">
      <div className="layout__container">
        <nav>
          <div className="nav__left">
            <div className="button--small">
              <GrLanguage />
            </div>
            <div className="button--small">
              <BsFonts />
            </div>
          </div>
          <div className="nav__right"></div>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
