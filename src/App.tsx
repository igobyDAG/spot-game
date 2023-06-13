import { useState } from "react";
import { useEffect } from "react";

import { Dot } from "./Dot";
import { getRandomWholeNumber } from "./utilities";
import { getRandomRGB } from "./utilities";

import "./App.css";

function App() {
  const [color, setColor] = useState<string>("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [correctGuess, setCorrectGuess] = useState<boolean | undefined>(
    undefined
  );
  // const [dotsArraySize, setDotsArraySize] = useState(0)  // todo: assing this through ui

  const dotsArray = 9;

  const createColors = (size: number) => {
    // This function is to be used in useEffect to initialize the colors data
    const [rgbValue, red, green, blue] = getRandomRGB();
    let colorsArray: string[] = new Array(size - 1).fill(rgbValue);
    const offsetValue = 40; // how much will the color differ todo: Make it changeable based on if the game is easy / hard
    const newColor = `rgb(${(red as number) - offsetValue},${
      (green as number) - offsetValue
    },${(blue as number) - offsetValue})`;

    const randomIndexPosition = getRandomWholeNumber(0, size + 1);
    colorsArray[randomIndexPosition] = newColor;

    setColor(newColor);
    setAnswers(colorsArray);
  };

  useEffect(() => {
    createColors(dotsArray);
  }, []);

  const checkAnswer = (value: string) => {
    if (value === color) {
      setCorrectGuess(true);
      createColors(dotsArray);
    } else {
      setCorrectGuess(false);
    }
  };

  return (
    <>
      <h1 className="instructions">
        One of the following dots is slightly different than the others
      </h1>
      <h2 className="instructions">Which one is it?</h2>
      <div className="canvas">
        {answers.map((value, idx) => (
          <div key={idx}>
            <Dot
              color={value}
              index={idx}
              checkColor={() => checkAnswer(value)}
            />
          </div>
        ))}
      </div>
      <div className="result-panel">
        {correctGuess && <span className="correct">Correct!</span>}
        {correctGuess === false && <span className="wrong">Try again!</span>}
      </div>
    </>
  );
}

export default App;
