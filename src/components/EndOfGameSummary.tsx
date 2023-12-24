import { useContext } from "react";
import { PickominoContext } from "../contexts";

export const EndOfGameSummary = () => {
  const { game } = useContext(PickominoContext);
  const { currentStep, players } = game;

  if (currentStep.type !== "endOfGame") return null;

  return (
    <>
      <h1>Fin de partie !</h1>
      <h2>Classement</h2>
      {players
        .map(({ id, name, barbecueWormsStack }) => ({
          id,
          name,
          totalPoints: barbecueWormsStack.reduce((p, c) => p + c.wormsCount, 0),
        }))
        .sort((a, b) => b.totalPoints - a.totalPoints)
        .map((p) => (
          <p key={p.id}>
            {p.name} : {p.totalPoints} point{p.totalPoints >= 2 ? "s" : ""}
          </p>
        ))}
    </>
  );
};
