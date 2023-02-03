import React, { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { useRecoilValue } from "recoil";
import { isKRAtom } from "../../../store/card";
import styles from "./InputText.module.scss";

type InputTypeProps = {
  text: string;
  setText: (text: string) => void;
};

export function InputText({ text, setText }: InputTypeProps) {
  const isKR = useRecoilValue(isKRAtom);
  const [slideUp, setSlideUp] = useState(true);
  const helperText = isKR ? "여기에 작성해주세요..." : "Please write here...";
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
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
