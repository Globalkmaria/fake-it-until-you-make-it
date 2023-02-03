import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { CountTypes } from "../../store/card";
import { AmountInput } from "./AmountInput";
import { CountType } from "./CountType";
import { HelperButtons } from "./HelperButtons";
import styles from "./Home.module.scss";
import { countTypeAtom } from "../../store/card";

export function Home() {
  const setCountType = useSetRecoilState(countTypeAtom);
  const [radioValue, setRadioValue] = useState<CountTypes>("up");
  const [amountValue, setAmountValue] = useState<string>("");

  useEffect(() => {
    setCountType("up");
  }, []);

  return (
    <section className={styles.home}>
      <h1 className={styles.title}>
        Fake It <br />
        Until
        <br />
        You Make It
      </h1>

      <CountType setRadioValue={setRadioValue} radioValue={radioValue} />
      <AmountInput setAmountValue={setAmountValue} amountValue={amountValue} />
      <HelperButtons setAmountValue={setAmountValue} radioValue={radioValue} />

      <div className={styles.start}>
        <Link to={`/cards`} className="button button--big">
          START
        </Link>
      </div>
    </section>
  );
}
