import React from "react";
import { Link } from "react-router-dom";
import styles from "./FinishModal.module.scss";
import { MdOutlineCelebration } from "react-icons/md";

export default function FinishModal() {
  return (
    <div className={styles["finish-modal"]}>
      <div className={styles["finish-modal__container"]}>
        <div className={styles["success-icon"]}>
          <MdOutlineCelebration />
        </div>
        <span className={styles.text}>
          Great!
          <br />
          You did it!
        </span>
        <Link to={"/"} className="button button--big">
          Go back home
        </Link>
      </div>
    </div>
  );
}
