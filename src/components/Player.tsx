import { useContext } from "react";
import { AvailableDice } from ".";
import { PickominoContext } from "../contexts";
import { PlayerType } from "../types";
import { PlayerActions } from "./PlayerActions";
import { SelectedDice } from "./SelectedDice";

export const Player = ({ id, name, barbecueWormsStack }: PlayerType) => {
  const {
    game: { currentStep, players },
  } = useContext(PickominoContext);
  if (players.length === 0) return null;
  const myTurn =
    currentStep.type === "playerTurn" && currentStep.playerId === id;
  return (
    <div
      style={{
        display: "inline-block",
        width: 100 / players.length + "%",
        verticalAlign: "top",
        textAlign: "center",
      }}
    >
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
          <AvailableDice />
          <SelectedDice />
        </>
      )}
    </div>
  );
};
