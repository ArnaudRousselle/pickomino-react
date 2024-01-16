import { useContext } from "react";
import { PickominoContext } from "../contexts";

export const PlayerActions = () => {
  const { actions, play } = useContext(PickominoContext);

  const availableActions = actions
    .filter(
      (a) =>
        a.type === "quitMyTurn" ||
        a.type === "takeWormFromBarbecueWorm" ||
        a.type === "takeWormFromPlayer"
    )
    .map((a) => ({ text: a.text, onClick: () => play(a) }));

  return availableActions.map((a) => (
    <button type="button" onClick={a.onClick}>
      {a.text}
    </button>
  ));
};
