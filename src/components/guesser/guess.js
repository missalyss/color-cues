const Guess = ({ guess, setGuess, id, label, score }) => {
  return (
    <div
      className="mb5 p3 flex flex-column align-center justify-center width-100"
      style={{ backgroundColor: guess }}
    >
      <label className="p2 radius-1 bg-white m2" htmlFor={id}>
        {label} guess
      </label>
      <input
        type="color"
        id={id}
        name={id}
        onChange={(e) => setGuess(e.target.value?.toUpperCase())}
      />
      {guess && <p className="p2 radius-1 bg-white m2">{guess}</p>}
      {score && (
        <>
        <p className="bolder">YOUR SCORE IS </p>
       <span>{score}</span>
        </>

      )}
    </div>
  );
};

export default Guess;
