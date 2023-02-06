import { atom } from "recoil";
import { Language } from "../lang/type";

export type CountTypes = "up" | "down";

export const goalStateAtom = atom<number>({
  key: "goal",
  default: 0,
});

export const countTypeAtom = atom<CountTypes>({
  key: "countType",
  default: "up",
});

export const LanguageAtom = atom<Language>({
  key: "Language",
  default: "EN",
});
