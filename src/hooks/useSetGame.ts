import { useState, useEffect } from "react";

import { getRandomRGB } from "../helpers/utilities";
import { getRandomWholeNumber } from "../helpers/utilities";
import { offsetValues } from "../helpers/constants";

interface GameProps {
  color: string;
  answers: string[];
  checkAnswer(value:string):void;
  correctGuess: boolean | undefined;
  offsetValue: number
}

// from here I need to return values that are needed for the top level component (<App />) to work
const useSetGame = (): GameProps => {
  const [color, setColor] = useState<string>("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [correctGuess, setCorrectGuess] = useState<boolean | undefined>(
    undefined
  );
  const [offsetValue, setOffsetValue] = useState<number>(offsetValues.easy);
  const [dotsArray, setDotsArray] = useState<number>(9);

  const createColors = (size: number) => {
    // This function is used in useEffect to initialize colors data
    const [rgbValue, red, green, blue] = getRandomRGB();
    const colorsArray: string[] = new Array(size - 1).fill(rgbValue);
    const offsetValue = 40; // how much will the other color differ from the rest
    const newColor = `rgb(${(red as number) - offsetValue},${
      (green as number) - offsetValue
    },${(blue as number) - offsetValue})`;

    const randomIndexPosition = getRandomWholeNumber(0, size + 1);
    colorsArray[randomIndexPosition] = newColor;
    setColor(newColor);
    setAnswers(colorsArray);
  };

  useEffect(() => {
    createColors(dotsArray)
  }, [])

  const checkAnswer = (value: string) => {
    if (value === color) {
      setCorrectGuess(true);
      createColors(dotsArray);
    } else {
      setCorrectGuess(false);
    }
  };

  return {
    color,
    answers,
    checkAnswer,
    correctGuess,
    offsetValue
  };
};

export default useSetGame