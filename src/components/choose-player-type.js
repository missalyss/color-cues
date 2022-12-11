import Card from "../pattern-lib/components/card";

const ChoosePlayerType = ({ setPlayerType }) => (
  <div className="flex flex-column justify-center align-center height-100">
    <Card className="bg-white mb4">
      <button onClick={() => setPlayerType("guesser")}>Guesser</button>
    </Card>
    <Card className="bg-white">
      <button onClick={() => setPlayerType("hinter")}>Hinter</button>
    </Card>
  </div>
);

export default ChoosePlayerType;
