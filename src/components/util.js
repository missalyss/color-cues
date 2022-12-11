export const randomHex = () => {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .toUpperCase()
  );
};

// const getRandomColor = () => {
//   const red;
//   const green;
//   const blue;

// }
