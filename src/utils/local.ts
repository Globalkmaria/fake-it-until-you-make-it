import { Language } from "../lang/type";
import { CountTypes } from "../store/card";

const COUNT_TYPE = "count-type";
const LANGUAGE = "language";
const GOAL = "goal";
const COUNT = "count";
const TEXT = "text";

// Set =================================================

export const saveCountTypeInLocal = (type: CountTypes) =>
  localStorage.setItem(COUNT_TYPE, type);

export const saveLanguageInLocal = (language: Language) =>
  localStorage.setItem(LANGUAGE, language);

export const saveGoalInLocal = (num: number) =>
  localStorage.setItem(GOAL, num + "");

export const saveCountInLocal = (num: number) =>
  localStorage.setItem(COUNT, num + "");

export const saveTextInLocal = (text: string) =>
  localStorage.setItem(TEXT, text);

//GET =================================================================

export const getGoalLocal = (): number => {
  return Number(localStorage.getItem(GOAL));
};

export const getCountLocal = (): number => {
  return Number(localStorage.getItem(COUNT));
};

export const getTextLocal = (): string | null => {
  return localStorage.getItem(TEXT);
};

// Reset =================================

export const resetTextLocal = () => {
  localStorage.removeItem(TEXT);
};

export const resetLocal = () => {
  localStorage.removeItem(GOAL);
  localStorage.removeItem(COUNT);
};
