const Answer = ({ setAnswer, answer }) => {
  const answerColor = answer.length < 6 ? '#F5F5F5' : answer;

  return (
    <div style={{ backgroundColor: answerColor }} className="border-black mb5 width-100 p3 flex flex-column align-center justify-center">
      <label className="p2 radius-1 bg-white m2" htmlFor="answer">
        Type in the answer to see your score
      </label>
      <input
        type="text"
        id="answer"
        name="answer"
        onChange={(e) => setAnswer(e.target.value?.toUpperCase())}
        value={answer}
      />
      {answer && (
        <p
          className="p2 radius-1 bg-white m2"

        >
          {answer}
        </p>
      )}
    </div>
  );
};

export default Answer;
