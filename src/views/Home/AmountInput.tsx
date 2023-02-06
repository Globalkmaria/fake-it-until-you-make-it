import React, { ChangeEvent } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { GoalPlaceholder } from "../../lang/home";
import { goalStateAtom, LanguageAtom } from "../../store/card";
import { getPositiveIntegerUnderMax } from "../../utils/number";
import styles from "./Home.module.scss";

type AmountInputProps = {
  setAmountValue: React.Dispatch<React.SetStateAction<string>>;
  amountValue: string;
};

export function AmountInput({ setAmountValue, amountValue }: AmountInputProps) {
  const language = useRecoilValue(LanguageAtom);
  const setGoal = useSetRecoilState(goalStateAtom);
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
  const placeholder = GoalPlaceholder[language];

  return (
    <input
      className={`box ${styles.amount}`}
      type="text"
      onChange={onAmountChange}
      placeholder={placeholder}
      value={amountValue}
    />
  );
}
