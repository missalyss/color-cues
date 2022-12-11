import React from "react";
import Card from "../../pattern-lib/components/card";
import { randomHex } from "../util";

const HinterHome = () => {
  const colorVal = randomHex();
  return (
    <div
      className="flex flex-column justify-center align-center height-100 radius-2"
      style={{ backgroundColor: colorVal }}
    >
      <p className="bg-white radius-1 text-center p3 ml6 mr6">
        Here's your color, choose one word to describe it! Say it out loud, then
        start the timer.
      </p>
      <Card className="bg-white radius-1 ml6 mr6 mt6 p3">
        <p>{colorVal}</p>
      </Card>
    </div>
  );
};

export default HinterHome;
