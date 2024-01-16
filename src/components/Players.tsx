import { useContext } from "react";
import { Player } from ".";
import { PickominoContext } from "../contexts";

export const Players = () => {
  const {
    game: { players },
  } = useContext(PickominoContext);
  return players.map((p) => <Player key={p.id} {...p} />);
};
