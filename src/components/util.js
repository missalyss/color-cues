export const randomHex = () => {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .toUpperCase()
  );
};

export const getColors = ({guess, answer}) => {
const rGuess = Number.parseInt(`${guess[1]}${guess[2]}`, 16)
const rAnswer = Number.parseInt(`${answer[1]}${answer[2]}`, 16)

const gGuess = Number.parseInt(`${guess[3]}${guess[4]}`, 16)
const gAnswer = Number.parseInt(`${answer[3]}${answer[4]}`, 16)

const bGuess = Number.parseInt(`${guess[5]}${guess[6]}`, 16)
const bAnswer = Number.parseInt(`${answer[5]}${answer[6]}`, 16)
  return { answer: { r: rAnswer, g: gAnswer, b: bAnswer}, guess: { r: rGuess, g: gGuess, b: bGuess}}
}

const getRgbDiff = ({answer, guess}) => {
  const {answer: rgbAnswer, guess: rgbGuess} = getColors({answer, guess})
  const redDiff = (rgbAnswer.r-rgbGuess.r)
  const greenDiff = (rgbAnswer.g-rgbGuess.g)
  const blueDiff = (rgbAnswer.b-rgbGuess.b)
  console.log('dif: ', {redDiff, greenDiff, blueDiff});
  return {redDiff, greenDiff, blueDiff}
}

// const getHexVal = ({guess, answer}) => {
//   const gGuess = Number.parseInt(guess, 10)
//   const gAnswer = Number.parseInt(answer, 10)
//   console.log('GUESS: ', gGuess);
//   console.log('SNSER: ', gAnswer);
//   return gAnswer - gGuess
// }
// const distance = Math.sqrt((rAnswer-rGuess)^2+(gAnswer-gGuess)^2+(bAnswer-bGuess)^2)

export const getScore = (guess, answer) => {
  const difs = getRgbDiff({guess, answer})
  return `Red: ${difs.redDiff}, Blue: ${difs.blueDiff}, Green: ${difs.greenDiff}`
  }

// const hexDif = getHexVal({guess: guess.slice(1), answer: answer.slice(1)})
//   let average = (difs?.redDiff + difs?.greenDiff + difs?.blueDiff)/3;
//   // console.log('average: ', average, 'difs', difs);
//   if (!average || isNaN(average)) {
//     return '...'
//   }

//   if (Math.sign(average) === -1)  {
//     average *= -1
//   }

// return average.toFixed()
// return hexDif
  // return color[0] === '#' ? color.slice(1) : color
