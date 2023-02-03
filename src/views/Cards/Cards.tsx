import React, { useState } from "react";
import { Card } from "./Card/Card";
import "./Cards.scss";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const MAX_CARDS_TO_SHOW = 5;
const GOAL = 10;

export function Cards() {
  const [text, setText] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const [cardsArray, setCardsArray] = useState<number[]>(
    Array.from({ length: 6 }, (_, i) => count + i - 1)
  );

  const [slideUp, setSlideUp] = useState(true);
  // const leftCardsSum = 100 - count;

  const increaseCount = (): void => setCount((count) => count + 1);
  const addNextCardInArray = (): void => {
    setCardsArray((prev) => {
      const prevLength = prev.length;
      const nextArrayStartIndex = prevLength > 10 ? 1 : 0;

      return [...prev.slice(nextArrayStartIndex), count + MAX_CARDS_TO_SHOW];
    });
  };

  const onCardClick = (): void => {
    increaseCount();
    const moreCardNeeded = count + MAX_CARDS_TO_SHOW < GOAL;
    if (!moreCardNeeded) return;
    addNextCardInArray();
  };

  return (
    <section className="cards">
      <div className="cards__container">
        {cardsArray.map((id) => (
          <Card
            onCardClick={onCardClick}
            text={text}
            id={id}
            count={count}
            key={id}
          />
        ))}
      </div>
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
