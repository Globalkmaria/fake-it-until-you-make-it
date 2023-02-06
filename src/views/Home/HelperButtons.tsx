import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { InfiniteText } from "../../lang/home";
import { CountTypes, goalStateAtom, LanguageAtom } from "../../store/card";
import styles from "./Home.module.scss";

type HelperButtonsProps = {
  setAmountValue: React.Dispatch<React.SetStateAction<string>>;
  countType: CountTypes;
};

export function HelperButtons({
  setAmountValue,
  countType,
}: HelperButtonsProps) {
  const language = useRecoilValue(LanguageAtom);
  const setGoal = useSetRecoilState(goalStateAtom);

  const onAmountHelperClick = (value: number): void => {
    setAmountValue(value.toLocaleString() + "");
    setGoal(value);
  };

  const onClickInfinityButton = () => {
    setAmountValue(InfiniteText[language]);
    setGoal(Number.MAX_SAFE_INTEGER);
  };

  const infiniteText = InfiniteText[language];

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
