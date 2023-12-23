import { useContext } from "react";
import { Player } from ".";
import { PickominoContext } from "../contexts";

export const Players = () => {
  const {
    game: { players },
  } = useContext(PickominoContext);
  return (
    <div>
      {players.map((p) => (
        <div key={p.id}>
          <Player playerId={p.id} name={p.name} />
        </div>
      ))}
    </div>
  );
};
