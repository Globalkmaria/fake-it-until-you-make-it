import React, { ReactNode } from "react";
import { useRouteError, Link } from "react-router-dom";
import styles from "./ErrorPage.module.scss";

export function ErrorPage(): ReactNode {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className={styles["error-page"]}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/" className={`button ${styles.home}`}>
        Go back Home
      </Link>
    </div>
  );
}
