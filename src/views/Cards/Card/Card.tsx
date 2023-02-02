import React, { useState } from "react";
import "./Card.scss";

type CardProps = {
  onIncreaseCount: () => void;
  text: string;
  count: number;
  index: number;
};

export function Card({ onIncreaseCount, text, count, index }: CardProps) {
  const [fadeOut, setFadeOut] = useState(false);
  const direction = count % 2 === 0 ? "left" : "right";
  const onClick = () => {
    onIncreaseCount();
    setFadeOut(true);
  };
  return (
    <div
      className={`card card--${index} ${direction} ${
        fadeOut ? "fade-out" : ""
      }`}
      onClick={onClick}
    >
      {text}
    </div>
  );
}
