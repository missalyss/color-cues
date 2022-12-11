import React, { useState } from "react";

const GuesserHome = () => {
  const [firstGuess, setFirstGuess] = useState("#000000");
  const [secondGuess, setSecondGuess] = useState(firstGuess);
  const [thirdGuess, setThirdGuess] = useState(secondGuess || null);

  return (
    <div className="flex flex-column justify-center align-center">
      <p className="mb3">
        Wait for the hinter to tell you a word. Then make your first guess!
      </p>

      <div
        className="radius-1 mb5 width-100 p3 flex flex-column align-center justify-center"
        style={{ backgroundColor: firstGuess }}
      >
        <label className="p2 radius-1 bg-white m2" htmlFor="firstGuess">
          First guess
        </label>
        <input
          type="color"
          id="firstGuess"
          name="firstGuess"
          onChange={(e) => setFirstGuess(e.target.value?.toUpperCase())}
        />
        {firstGuess && <p className="p2 radius-1 bg-white m2">{firstGuess}</p>}
      </div>

      <div
        className="radius-1 mb5 width-100 p3 flex flex-column align-center justify-center"
        style={{ backgroundColor: secondGuess }}
      >
        <label className="p2 radius-1 bg-white m2" htmlFor="secondGuess">
          Second guess
        </label>
        <input
          type="color"
          id="secondGuess"
          name="secondGuess"
          onChange={(e) => setSecondGuess(e.target.value?.toUpperCase())}
        />
        {secondGuess && (
          <p className="p2 radius-1 bg-white m2">{secondGuess}</p>
        )}
      </div>

      <div
        className="radius-1 mb5 width-100 p3 flex flex-column align-center justify-center"
        style={{ backgroundColor: thirdGuess }}
      >
        <label className="p2 radius-1 bg-white m2" htmlFor="thirdGuess">
          Third guess
        </label>
        <input
          type="color"
          id="thirdGuess"
          name="thirdGuess"
          onChange={(e) => setThirdGuess(e.target.value?.toUpperCase())}
        />
        {thirdGuess && <p className="p2 radius-1 bg-white m2">{thirdGuess}</p>}
      </div>
    </div>
  );
};

export default GuesserHome;
