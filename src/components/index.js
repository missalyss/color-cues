import React, { useState } from "react";
import Card from "../pattern-lib/components/card";
import ChoosePlayerType from "./choose-player-type";
// import GameContext, { GameContextProvider } from './game-context';

const HomePage = () => {
  const [numberOfRounds, setGameRounds] = useState(3);
  const setNumberOfRounds = (num) => setGameRounds(num);
  console.log("numberOfRounds: ", numberOfRounds);

  const clearCache = () => {
    //clear cache of previous rounds; new game is starting
  };
  return (
    <div className="text-center height-100 pt9">
      <h1>Welcome to Color Cues</h1>
      <p className="xs-font">
        See{" "}
        <a
          className="text-underline"
          href="https://www.amazon.com/USAOPOLY-Vibrant-Guessing-Perfect-Together/dp/B084D2XQ9F?th=1"
        >
          Hues and Cues
        </a>
      </p>
      <div>Rules</div>
      {numberOfRounds > 0 ? (
        <ChoosePlayerType />
      ) : (
        <Card>
          <h2>Start a new game</h2>

          <button
            onClick={() => {
              clearCache();
              setNumberOfRounds(3);
            }}
          >
            3 rounds
          </button>
          {/* <button onClick={() => {
          clearCache();
          setNumberOfRounds(5);
        }
      }>5 rounds</button>
      <button onClick={() => {
        clearCache();
        setNumberOfRounds(7);
      }
    }>7 rounds</button> */}
        </Card>
      )}
    </div>
  );
};

export default HomePage;
