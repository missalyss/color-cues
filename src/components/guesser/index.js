import { useState } from "react";
import Answer from "./answer";
import Guess from "./guess";
import { getScore } from "../util";
const GuesserHome = () => {
  const [firstGuess, setFirstGuess] = useState("#000000");
  const [secondGuess, setSecondGuess] = useState(firstGuess);
  const [thirdGuess, setThirdGuess] = useState(secondGuess || null);

  const [answer, setAnswer] = useState("#");

  const firstScore = getScore(firstGuess, answer)
  const secondScore = getScore(secondGuess, answer)
  const thirdScore = getScore(thirdGuess, answer)

  return (
    <div className="flex flex-column justify-center align-center width-100">
      <p className="p3">
        Wait for the hinter to tell you a word. Then make your first guess!
      </p>

      <Guess
        score={firstScore}
        guess={firstGuess}
        setGuess={setFirstGuess}
        label="First"
        id="firstGuess"
      />
      <Guess
      score={secondScore}
        guess={secondGuess}
        setGuess={setSecondGuess}
        label="Second"
        id="secondGuess"
      />
      <Guess
      score={thirdScore}
        guess={thirdGuess}
        setGuess={setThirdGuess}
        label="Third"
        id="thirdGuess"
      />
      <Answer setAnswer={setAnswer} answer={answer} />
      {/* <p className="bolder">YOUR SCORE IS </p>
      <span>{score}</span> */}
      <br />
      <br />
      <span className="bolder">If ALL 3 numbers are:</span>
      <p>under 30 = 1 point</p>
      <p>under 10 = 2 points</p>
      <p>under 5 = 10 points!</p>

    </div>
  );
};

export default GuesserHome;
