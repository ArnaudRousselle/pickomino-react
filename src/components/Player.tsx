import { useContext } from "react";
import { PickominoContext } from "../contexts";
import { PlayerType } from "../types";

export const Player = ({ id, name, barbecueWormsStack }: PlayerType) => {
  const {
    game: { currentStep },
  } = useContext(PickominoContext);
  const myTurn =
    currentStep.type === "playerTurn" && currentStep.playerId === id;
  return (
    <>
      {name}
      {myTurn ? "*** " : " "}
      {barbecueWormsStack.length > 0
        ? " --> " +
          barbecueWormsStack[0].value +
          " +" +
          (barbecueWormsStack.length > 1 ? barbecueWormsStack.length - 1 : 0)
        : ""}
    </>
  );
};
