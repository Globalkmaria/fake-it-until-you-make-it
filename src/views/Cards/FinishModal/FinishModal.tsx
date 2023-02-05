import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FinishModal.module.scss";
import { MdOutlineCelebration } from "react-icons/md";
import { goalStateAtom, isKRAtom } from "../../../store/card";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { resetLocal, resetTextLocal } from "../../../utils/local";

export function FinishModal() {
  const resetGoal = useResetRecoilState(goalStateAtom);
  const navigate = useNavigate();
  const [keepText, setKeepText] = useState(true);
  const isKR = useRecoilValue(isKRAtom);
  const goBackHomeText = isKR ? "홈으로 돌아가기" : "Go back home";
  const CongratsMessage = isKR ? KRCongratsMessage : ENCongratsMessage;
  const CheckboxIcon = keepText ? MdCheckBox : MdCheckBoxOutlineBlank;
  const KeepTextMessage = isKR
    ? "글을 유지하시겠습니까?"
    : "Do you want to keep the text?";

  const onHomeClick = () => {
    if (!keepText) {
      resetTextLocal();
    }
    resetLocal();
    resetGoal();
    navigate("/");
  };

  return (
    <div className={styles["finish-modal"]}>
      <div className={styles["finish-modal__container"]}>
        <div className={styles["success-icon"]}>
          <MdOutlineCelebration />
        </div>
        <span className={styles.text}>
          <CongratsMessage />
        </span>
        <div
          className={styles["keep-text"]}
          onClick={() => setKeepText((prev) => !prev)}
        >
          <CheckboxIcon className={styles.icon} />
          <span className={styles["keep-text-message"]}>{KeepTextMessage}</span>
        </div>
        <button onClick={onHomeClick} className="button button--big">
          {goBackHomeText}
        </button>
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
