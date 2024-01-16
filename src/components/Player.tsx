import { useContext } from "react";
import { PickominoContext } from "../contexts";
import { PlayerType } from "../types";
import { PlayerActions } from "./PlayerActions";
import { SelectedDice } from "./SelectedDice";

export const Player = ({ id, name, barbecueWormsStack }: PlayerType) => {
  const {
    game: { currentStep },
  } = useContext(PickominoContext);
  const myTurn =
    currentStep.type === "playerTurn" && currentStep.playerId === id;
  return (
    <span style={{ display: "inline-block" }}>
      <p style={{ fontWeight: myTurn ? "bold" : "normal" }}>{name}</p>

      {barbecueWormsStack.length > 0
        ? " --> " +
          barbecueWormsStack[0].value +
          " +" +
          (barbecueWormsStack.length > 1 ? barbecueWormsStack.length - 1 : 0)
        : ""}

      {myTurn && (
        <>
          <PlayerActions />
          <SelectedDice />
        </>
      )}
    </span>
  );
};
