import React, { useState } from "react";
import styles from "./Cards.module.scss";
import { CountSum } from "./CountSum/CountSum";
import { InputText } from "./InputText/InputText";
import CardsSlider from "./CardSlider/CardsSlider";

export function Cards() {
  const [text, setText] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  return (
    <section className={styles.cards}>
      <CardsSlider count={count} setCount={setCount} text={text} />
      <CountSum count={count} />
      <InputText text={text} setText={setText} />
    </section>
  );
}
