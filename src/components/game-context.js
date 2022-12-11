import React, { useState } from "react";

export const GameContext = React.createContext({
  numberOfRounds: 0,
  setNumberOfRounds: () => {},
});

// export const GameContextProvider = () => {
//     const [ numberOfRounds, setGameRounds] = useState()
//   console.log('numberOfRounds: ', numberOfRounds);
// const setNumberOfRounds = (num) => setGameRounds(num);

//   return (
//             <GameContext.Provider value={{numberOfRounds, setNumberOfRounds}}>
//           </GameContext.Provider>

//   )

// }
export const GameContextProvider = GameContext.Provider;

export default GameContext;
