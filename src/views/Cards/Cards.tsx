import React, { useState } from "react";
import styles from "./Cards.module.scss";
import { CountSum } from "./CountSum/CountSum";
import { InputText } from "./InputText/InputText";
import CardsSlider from "./CardSlider/CardsSlider";
import FinishModal from "./FinishModal/FinishModal";
import { goalStateAtom } from "../../store/card";
import { useRecoilValue } from "recoil";

export function Cards() {
  const goal = useRecoilValue(goalStateAtom);
  const [text, setText] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const isFinished = goal === count;

  return (
    <section className={styles.cards}>
      <CardsSlider count={count} setCount={setCount} text={text} />
      <CountSum count={count} />
      <InputText text={text} setText={setText} />
      {isFinished && <FinishModal />}
    </section>
  );
}
