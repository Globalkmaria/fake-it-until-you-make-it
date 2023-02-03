import React, { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import styles from "./InputText.module.scss";

type InputTypeProps = {
  text: string;
  setText: (text: string) => void;
};

export function InputText({ text, setText }: InputTypeProps) {
  const [slideUp, setSlideUp] = useState(true);
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
        placeholder="Please write here..."
        className={styles["text"]}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
