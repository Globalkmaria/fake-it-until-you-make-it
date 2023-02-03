import React from "react";
import { useRecoilValue } from "recoil";
import { countTypeAtom, goalStateAtom } from "../../../store/card";
import styles from "./CountSum.module.scss";

type CountSumProps = {
  count: number;
};

export function CountSum({ count }: CountSumProps) {
  const countType = useRecoilValue(countTypeAtom);
  return (
    <div className={styles["count-and-goal"]}>
      {countType === "up" ? (
        <CountUpText count={count} />
      ) : (
        <CountDownText count={count} />
      )}
    </div>
  );
}

function CountUpText({ count }: CountSumProps) {
  const goal = useRecoilValue(goalStateAtom);
  const isGoalInfinite = goal === Number.MAX_SAFE_INTEGER;
  return (
    <>
      <span className={styles.count}>{count}</span>
      {!isGoalInfinite && (
        <>
          <span className={styles.separator}>/</span>
          <span className={styles.goal}>{goal}</span>
        </>
      )}
    </>
  );
}

function CountDownText({ count }: CountSumProps) {
  const goal = useRecoilValue(goalStateAtom);
  return (
    <>
      <span className={styles.count}>{goal - count}</span>
    </>
  );
}
