import React, { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { CountTypes, goalStateAtom } from "../../store/card";
import { getPositiveIntegerUnderMax } from "../../utils/number";
import { CountType } from "./CountType/CountType";
import { HelperButtons } from "./HelperButtons";
import styles from "./Home.module.scss";

export function Home() {
  const setGoal = useSetRecoilState(goalStateAtom);
  const [radioValue, setRadioValue] = useState<CountTypes>("up");
  const [amountValue, setAmountValue] = useState<string>("");

  const onAmountChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    if (value === "") {
      setAmountValue("");
      setGoal(0);
      return;
    }

    const finalAmount: number = getPositiveIntegerUnderMax(value, 10000);
    setAmountValue(finalAmount.toLocaleString());
    setGoal(finalAmount);
  };

  return (
    <section className={styles.home}>
      <h1 className={styles.title}>
        Fake It <br />
        Until
        <br />
        You Make It
      </h1>

      <CountType setRadioValue={setRadioValue} radioValue={radioValue} />

      <input
        className={`box ${styles.amount}`}
        type="text"
        onChange={onAmountChange}
        placeholder={"Please input amount..."}
        value={amountValue}
      />
      <HelperButtons setAmountValue={setAmountValue} radioValue={radioValue} />

      <div className={styles.start}>
        <Link to={`/cards`} className="button button--big">
          START
        </Link>
      </div>
    </section>
  );
}
