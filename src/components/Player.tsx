import { useContext } from "react";
import { AvailableDice } from ".";
import { PickominoContext } from "../contexts";
import { PlayerType } from "../types";
import { PlayerActions } from "./PlayerActions";
import { PlayerStack } from "./PlayerStack";
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
        height: "100%",
        width: 100 / players.length + "%",
        textAlign: "center",
        verticalAlign: "top",
      }}
    >
      <PlayerStack barbecueWormsStack={barbecueWormsStack} />
      <p
        style={{
          fontWeight: myTurn ? "bold" : "normal",
        }}
      >
        {name}
      </p>
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
