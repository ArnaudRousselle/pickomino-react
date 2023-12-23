import { useContext } from "react";
import { PickominoContext } from "../contexts";

export const Player = ({
  playerId,
  name,
}: {
  playerId: number;
  name: string;
}) => {
  const {
    game: { currentStep },
  } = useContext(PickominoContext);
  const myTurn =
    currentStep.type === "playerTurn" && currentStep.playerId === playerId;
  if (!myTurn) return name;
  return <>***{name}*** </>;
};
