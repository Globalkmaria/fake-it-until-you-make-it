import React, { useEffect, useState } from "react";
import styles from "./Cards.module.scss";
import { CountSum } from "./CountSum/CountSum";
import { InputText } from "./InputText/InputText";
import CardsSlider from "./CardSlider/CardsSlider";
import { FinishModal } from "./FinishModal/FinishModal";
import { goalStateAtom } from "../../store/card";
import { useRecoilState } from "recoil";
import { getCountLocal, getGoalLocal, getTextLocal } from "../../utils/local";

export function Cards() {
  const [goal, setGoal] = useRecoilState(goalStateAtom);
  const [text, setText] = useState<string>(getTextLocal() || "");
  const [count, setCount] = useState<number>(getCountLocal() || 0);
  const isFinished = goal === count;

  useEffect(() => {
    setGoal(getGoalLocal());
  }, []);

  return (
    <section className={styles.cards}>
      <CardsSlider count={count} setCount={setCount} text={text} />
      <CountSum count={count} />
      <InputText text={text} setText={setText} />
      {isFinished && <FinishModal />}
    </section>
  );
}
