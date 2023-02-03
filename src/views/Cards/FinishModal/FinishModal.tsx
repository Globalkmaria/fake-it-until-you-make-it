import React from "react";
import { Link } from "react-router-dom";
import styles from "./FinishModal.module.scss";
import { MdOutlineCelebration } from "react-icons/md";
import { isKRAtom } from "../../../store/card";
import { useRecoilValue } from "recoil";

export function FinishModal() {
  const isKR = useRecoilValue(isKRAtom);
  const goBackHomeText = isKR ? "홈으로 돌아가기" : "Go back home";
  const CongratsMessage = isKR ? KRCongratsMessage : ENCongratsMessage;
  return (
    <div className={styles["finish-modal"]}>
      <div className={styles["finish-modal__container"]}>
        <div className={styles["success-icon"]}>
          <MdOutlineCelebration />
        </div>
        <span className={styles.text}>
          <CongratsMessage />
        </span>
        <Link to={"/"} className="button button--big">
          {goBackHomeText}
        </Link>
      </div>
    </div>
  );
}

function KRCongratsMessage() {
  return <div>모두 완료했습니다!</div>;
}

function ENCongratsMessage() {
  return (
    <div>
      Great!
      <br />
      You did it!
    </div>
  );
}
