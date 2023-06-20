import useSetGame from "./hooks/useSetGame";

import { Dot } from "./components/Dot";

import "./App.css";

function App() {
  const {answers, checkAnswer, correctGuess} = useSetGame()

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
