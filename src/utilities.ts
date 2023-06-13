export const getRandomWholeNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const getRandomRGB = (): (string | number)[] => {
  const red = getRandomWholeNumber(0, 255);
  const green = getRandomWholeNumber(0, 255);
  const blue = getRandomWholeNumber(0, 255);
  const rgbValue = `rgb(${red},${green},${blue})`;
  return [rgbValue, red, green, blue];
};
