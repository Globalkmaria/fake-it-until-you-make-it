import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { CountTypes, goalStateAtom, isKRAtom } from "../../store/card";
import { AmountInput } from "./AmountInput";
import { CountType } from "./CountType";
import { HelperButtons } from "./HelperButtons";
import styles from "./Home.module.scss";
import { countTypeAtom } from "../../store/card";
import {
  getGoalLocal,
  saveCountTypeInLocal,
  saveGoalInLocal,
} from "../../utils/local";

export function Home() {
  const navigate = useNavigate();
  const isKR = useRecoilValue(isKRAtom);
  const setCountTypeAtom = useSetRecoilState(countTypeAtom);
  const goal = useRecoilValue(goalStateAtom);
  const [countType, setCountType] = useState<CountTypes>("up");
  const [amountValue, setAmountValue] = useState<string>("");

  useEffect(() => {
    if (getGoalLocal()) {
      navigate("/cards");
    }

    setCountTypeAtom("up");
  }, []);

  const onClickStart = () => {
    if (!goal) return;
    saveCountTypeInLocal(countType);
    saveGoalInLocal(goal);
    navigate("/cards");
  };

  return (
    <section className={styles.home}>
      <h1 className={styles.title}>
        Fake It <br />
        Until
        <br />
        You Make It
      </h1>

      <CountType
        setAmountValue={setAmountValue}
        setCountType={setCountType}
        countType={countType}
      />
      <AmountInput setAmountValue={setAmountValue} amountValue={amountValue} />
      <HelperButtons setAmountValue={setAmountValue} countType={countType} />

      <div className={styles.start}>
        <button onClick={onClickStart} className="button button--big">
          {isKR ? "시작" : "START"}
        </button>
      </div>
    </section>
  );
}
