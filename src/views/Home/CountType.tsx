import React, { ChangeEvent } from "react";
import { useSetRecoilState } from "recoil";
import { CountTypes, countTypeAtom } from "../../store/card";
import styles from "./Home.module.scss";

type CountTypeProps = {
  setRadioValue: React.Dispatch<React.SetStateAction<CountTypes>>;
  radioValue: CountTypes;
};

export function CountType({ setRadioValue, radioValue }: CountTypeProps) {
  return (
    <div className={styles["count-buttons"]}>
      <div className={styles["count-buttons__container"]}>
        <CountTypeInput
          radioValue={radioValue}
          setRadioValue={setRadioValue}
          type={"up"}
        />
        <CountTypeInput
          radioValue={radioValue}
          setRadioValue={setRadioValue}
          type={"down"}
        />
        <div
          className={[styles["selected-background"], styles[radioValue]].join(
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
  radioValue,
  setRadioValue,
  type,
}: CountTypeInputProps) {
  const setCountType = useSetRecoilState(countTypeAtom);
  const onCountType = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value as CountTypes;
    setRadioValue(value);
    setCountType(value);
  };
  return (
    <label
      className={[styles[`count-${type}`], styles["count-button"]].join(" ")}
    >
      <input
        name="count"
        type="radio"
        value={type}
        checked={radioValue === type}
        onChange={onCountType}
      />
      Count <br /> {type}
    </label>
  );
}
