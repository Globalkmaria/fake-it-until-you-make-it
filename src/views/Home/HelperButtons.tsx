import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { CountTypes, goalStateAtom, isKRAtom } from "../../store/card";
import styles from "./Home.module.scss";

type HelperButtonsProps = {
  setAmountValue: React.Dispatch<React.SetStateAction<string>>;
  countType: CountTypes;
};

export function HelperButtons({
  setAmountValue,
  countType,
}: HelperButtonsProps) {
  const isKR = useRecoilValue(isKRAtom);
  const setGoal = useSetRecoilState(goalStateAtom);

  const onAmountHelperClick = (value: number): void => {
    setAmountValue(value.toLocaleString() + "");
    setGoal(value);
  };

  const onClickInfinityButton = () => {
    setAmountValue("INFINITY");
    setGoal(Number.MAX_SAFE_INTEGER);
  };

  const infiniteText = isKR ? "무한" : "INFINITY";

  return (
    <div className={styles.amount__helpers}>
      <div className={styles.amount__helpers__container}>
        {HELPER_TYPES.map((type) => (
          <button
            key={type}
            className={`button button--middle ${styles.helper}`}
            onClick={() => onAmountHelperClick(type)}
          >
            {type}
          </button>
        ))}
        {countType === "up" && (
          <button
            className={`button button--middle ${styles.helper}`}
            onClick={onClickInfinityButton}
          >
            {infiniteText}
          </button>
        )}
      </div>
    </div>
  );
}

const HELPER_TYPES = [1000, 500, 100, 10];
