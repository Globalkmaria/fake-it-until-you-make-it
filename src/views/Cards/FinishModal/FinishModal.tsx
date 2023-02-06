import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FinishModal.module.scss";
import { MdOutlineCelebration } from "react-icons/md";
import { goalStateAtom, LanguageAtom } from "../../../store/card";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { resetLocal, resetTextLocal } from "../../../utils/local";
import {
  CongratsMessage,
  GoBackHomeText,
  KeepTextMessage,
} from "../../../lang/card";

export function FinishModal() {
  const resetGoal = useResetRecoilState(goalStateAtom);
  const navigate = useNavigate();
  const [keepText, setKeepText] = useState(true);
  const language = useRecoilValue(LanguageAtom);
  const goBackHomeText = GoBackHomeText[language];
  const CongratsMessageComponent = CongratsMessage[language];
  const CheckboxIcon = keepText ? MdCheckBox : MdCheckBoxOutlineBlank;
  const keepTextMessage = KeepTextMessage[language];
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
          <CongratsMessageComponent />
        </span>
        <div
          className={styles["keep-text"]}
          onClick={() => setKeepText((prev) => !prev)}
        >
          <CheckboxIcon className={styles.icon} />
          <span className={styles["keep-text-message"]}>{keepTextMessage}</span>
        </div>
        <button onClick={onHomeClick} className="button button--big">
          {goBackHomeText}
        </button>
      </div>
    </div>
  );
}
