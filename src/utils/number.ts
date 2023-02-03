export const getOnlyNumberFromString = (value: string): string =>
  value.replace(/[^0-9]/g, "");

export const getPositiveIntegerUnderMax = (
  value: string,
  max: number,
  defaultValue?: number
): number => {
  const numberedValue = Number(getOnlyNumberFromString(value));
  let finalValue = defaultValue || 1;

  if (numberedValue > max) {
    finalValue = max;
  } else if (numberedValue > 1) {
    finalValue = Math.floor(numberedValue);
  }

  return finalValue;
};
