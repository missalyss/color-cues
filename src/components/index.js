import React, { useState } from "react";
import ChoosePlayerType from "./choose-player-type";
import GuesserHome from "./guesser";
import HinterHome from "./hinter";

const HomePage = () => {
  const [playerType, setPlayerType] = useState(null);

  const render = () => {
    if (playerType === null) {
      return <ChoosePlayerType setPlayerType={setPlayerType} />;
    }
    if (playerType === "guesser") {
      return <GuesserHome />;
    }
    if (playerType === "hinter") {
      return <HinterHome />;
    }
  };

  return (
    <main style={{ height: "95vh" }} className="m3 bg-white radius-2">
      {render()}
    </main>
  );
};

export default HomePage;
