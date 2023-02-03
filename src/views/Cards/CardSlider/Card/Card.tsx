import React, { useState } from "react";
import styles from "./Card.module.scss";

type CardProps = {
  onCardClick: () => void;
  text: string;
  count: number;
  id: number;
};

export function Card({ onCardClick, text, count, id }: CardProps) {
  const [displayNone, setDisplayNone] = useState<boolean>(false);
  const [fadeOut, setFadeOut] = useState<boolean>(false);
  const direction = id % 2 === 0 ? "left" : "right";
  const order = (id - count) % 5;
  const cardPositionCss = order >= 0 ? `card--${order}` : "";

  const onClick = (): void => {
    if (fadeOut) return;
    if (order !== 0) return;
    onCardClick();
    setFadeOut(true);
    setTimeout(() => {
      setDisplayNone(true);
    }, 2000);
  };

  return (
    <div
      className={[
        styles.card,
        styles[id],
        styles[direction],
        styles[cardPositionCss],
        styles[fadeOut ? "fade-out" : ""],
        styles[displayNone ? "display-none" : ""],
      ].join(" ")}
      onClick={onClick}
    >
      {text}
    </div>
  );
}
