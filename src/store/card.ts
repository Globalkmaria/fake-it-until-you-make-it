import { atom } from "recoil";

export type CountTypes = "up" | "down";

export const goalStateAtom = atom<number>({
  key: "goal",
  default: 0,
});

export const countTypeAtom = atom<CountTypes>({
  key: "countType",
  default: "up",
});
