import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { goalStateAtom } from "../../../store/card";
import { Card } from "./Card/Card";
import styles from "./CardsSlider.module.scss";

type CardsSliderProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  text: string;
};

const MAX_CARDS_TO_SHOW = 5;

function CardsSlider({ count, setCount, text }: CardsSliderProps) {
  const goal = useRecoilValue(goalStateAtom);
  const [cardsArray, setCardsArray] = useState<number[]>(
    Array.from({ length: 6 }, (_, i) => count + i - 1)
  );

  const increaseCount = (): void => setCount((count: number) => count + 1);
  const addNextCardInArray = (): void => {
    setCardsArray((prev) => {
      const prevLength = prev.length;
      const nextArrayStartIndex = prevLength > 10 ? 1 : 0;

      return [...prev.slice(nextArrayStartIndex), count + MAX_CARDS_TO_SHOW];
    });
  };

  const onCardClick = (): void => {
    increaseCount();
    const moreCardNeeded = count + MAX_CARDS_TO_SHOW < goal;
    if (!moreCardNeeded) return;
    addNextCardInArray();
  };

  return (
    <div className={styles["card-slider"]}>
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
  );
}

export default CardsSlider;
