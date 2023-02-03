import React, { useState } from "react";
import "./Card.scss";

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
  const order = id - count;
  const cardPositionCss = order >= 0 ? `card--${order % 5}` : "";

  const onClick = (): void => {
    if (fadeOut) return;

    onCardClick();
    setFadeOut(true);
    setTimeout(() => {
      setDisplayNone(true);
    }, 2000);
  };

  return (
    <div
      className={`card ${id} ${cardPositionCss} ${direction} ${
        fadeOut ? "fade-out" : ""
      } ${displayNone ? "display-none" : ""}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
}
