import { Link } from "react-router-dom";
import Card from "../pattern-lib/components/card";

const ChoosePlayerType = ({ setPlayerType }) => (
  <div className="flex flex-column justify-center align-center height-100">
    <Card className="bg-pink mb4">
      <Link className="text-black" to="/guesser">
        Guesser
      </Link>
    </Card>
    <Card className="bg-pink">
      <Link to="/hinter">Hinter</Link>
    </Card>
  </div>
);

export default ChoosePlayerType;
