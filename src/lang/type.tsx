export type Language = "KR" | "EN";

export type LanguageAndTextPairs = {
  [key in Language]: string;
};

export type LanguageAndComponentPairs = {
  [key in Language]: () => JSX.Element;
};
