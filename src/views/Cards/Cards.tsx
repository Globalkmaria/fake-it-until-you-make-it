import React, { useState } from "react";
import { Card } from "./Card/Card";
import "./Cards.scss";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

export function Cards() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const onIncreaseCount = () => setCount((count) => count + 1);
  const [slideUp, setSlideUp] = useState(true);

  return (
    <section className="cards">
      <Card onIncreaseCount={onIncreaseCount} text={text} />
      <div className="count-and-goal">
        <span className="count">{count}</span>
        <span className="separator">/</span>
        <span className="goal">{100}</span>
      </div>
      <div className={`text-slide ${slideUp ? "text-slide--up" : ""}`}>
        <div className="text-slide__move-icons">
          {slideUp ? (
            <button
              className="text-slide__move-icon"
              onClick={() => setSlideUp(false)}
            >
              <AiFillCaretDown />
            </button>
          ) : (
            <button
              className="text-slide__move-icon"
              onClick={() => setSlideUp(true)}
            >
              <AiFillCaretUp />
            </button>
          )}
        </div>
        <textarea
          placeholder="Please write here..."
          className="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </section>
  );
}
