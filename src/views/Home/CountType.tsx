import React, { ChangeEvent } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { CountTypes, countTypeAtom, isKRAtom } from "../../store/card";
import { saveCountTypeInLocal } from "../../utils/local";
import styles from "./Home.module.scss";

type CountTypeProps = {
  setCountType: React.Dispatch<React.SetStateAction<CountTypes>>;
  countType: CountTypes;
};

export function CountType({ setCountType, countType }: CountTypeProps) {
  return (
    <div className={styles["count-buttons"]}>
      <div className={styles["count-buttons__container"]}>
        <CountTypeInput
          countType={countType}
          setCountType={setCountType}
          type={"up"}
        />
        <CountTypeInput
          countType={countType}
          setCountType={setCountType}
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
} & CountTypeProps;

export function CountTypeInput({
  countType,
  setCountType,
  type,
}: CountTypeInputProps) {
  const isKR = useRecoilValue(isKRAtom);
  const setCountTypeAtom = useSetRecoilState(countTypeAtom);
  const onCountType = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value as CountTypes;
    saveCountTypeInLocal(value);
    setCountTypeAtom(value);
    setCountType(value);
  };

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
        onChange={onCountType}
      />
      {countText} <br /> {countTypeText}
    </label>
  );
}

const KR_TYPE = {
  up: "업",
  down: "다운",
};
