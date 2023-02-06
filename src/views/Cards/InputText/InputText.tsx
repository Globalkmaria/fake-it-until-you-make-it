import React, { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { useRecoilValue } from "recoil";
import { GoalTextareaHelper } from "../../../lang/card";
import { LanguageAtom } from "../../../store/card";
import { saveTextInLocal } from "../../../utils/local";
import styles from "./InputText.module.scss";

type InputTypeProps = {
  text: string;
  setText: (text: string) => void;
};

export function InputText({ text, setText }: InputTypeProps) {
  const language = useRecoilValue(LanguageAtom);
  const [slideUp, setSlideUp] = useState(true);
  const helperText = GoalTextareaHelper[language];

  const onTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  const onTextareaBlur = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    saveTextInLocal(e.target.value);
  };

  return (
    <div
      className={[
        styles[`text-slide`],
        styles[slideUp ? "text-slide--up" : ""],
      ].join(" ")}
    >
      <div className={styles["text-slide__move-icons"]}>
        {slideUp ? (
          <button
            className={styles["text-slide__move-icon"]}
            onClick={() => setSlideUp(false)}
          >
            <AiFillCaretDown />
          </button>
        ) : (
          <button
            className={styles["text-slide__move-icon"]}
            onClick={() => setSlideUp(true)}
          >
            <AiFillCaretUp />
          </button>
        )}
      </div>
      <textarea
        placeholder={helperText}
        className={styles["text"]}
        value={text}
        onChange={onTextareaChange}
        onBlur={onTextareaBlur}
      />
    </div>
  );
}
