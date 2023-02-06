import React, { ChangeEvent } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  CountTypes,
  countTypeAtom,
  isKRAtom,
  goalStateAtom,
} from "../../store/card";
import { saveCountTypeInLocal } from "../../utils/local";
import styles from "./Home.module.scss";

type CountTypeProps = {
  setAmountValue: React.Dispatch<React.SetStateAction<string>>;
  setCountType: React.Dispatch<React.SetStateAction<CountTypes>>;
  countType: CountTypes;
};

export function CountType({
  setCountType,
  countType,
  setAmountValue,
}: CountTypeProps) {
  const setGoal = useSetRecoilState(goalStateAtom);
  const setCountTypeAtom = useSetRecoilState(countTypeAtom);
  const onCountTypeChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value as CountTypes;
    saveCountTypeInLocal(value);
    setCountTypeAtom(value);
    setCountType(value);
    setAmountValue("");
    setGoal(0);
  };

  return (
    <div className={styles["count-buttons"]}>
      <div className={styles["count-buttons__container"]}>
        <CountTypeInput
          onCountTypeChange={onCountTypeChange}
          countType={countType}
          type={"up"}
        />
        <CountTypeInput
          onCountTypeChange={onCountTypeChange}
          countType={countType}
          type={"down"}
        />
        <div
          className={[styles["selected-background"], styles[countType]].join(
            " "
          )}
        />
      </div>
    </div>
  );
}

type CountTypeInputProps = {
  type: CountTypes;
  countType: CountTypes;
  onCountTypeChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function CountTypeInput({
  type,
  countType,
  onCountTypeChange,
}: CountTypeInputProps) {
  const isKR = useRecoilValue(isKRAtom);
  const countText = isKR ? "카운트" : "count";
  const countTypeText = isKR ? KR_TYPE[type] : type;

  return (
    <label
      className={[styles[`count-${type}`], styles["count-button"]].join(" ")}
    >
      <input
        name="count"
        type="radio"
        value={type}
        checked={countType === type}
        onChange={onCountTypeChange}
      />
      {countText} <br /> {countTypeText}
    </label>
  );
}

const KR_TYPE = {
  up: "업",
  down: "다운",
};
