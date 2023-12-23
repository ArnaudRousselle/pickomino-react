import { useContext } from "react";
import { PickominoContext } from "../contexts";

export const Play = () => {
  const { game, play } = useContext(PickominoContext);
  const { currentStep } = game;
  if (currentStep.type === "playerTurn") {
    if (currentStep.subStep === "mustLaunchDice")
      return (
        <button type="button" onClick={() => play({ type: "launchDice" })}>
          Lancer les dés
        </button>
      );
    if (currentStep.subStep === "mustChooseDiceValue") {
      const { availableDice, selectedDice } = game;
      return availableDice
        .filter((d) => !selectedDice.some((sd) => sd.value === d.value))
        .filter(
          (d, index, arr) => arr.findIndex((a) => a.value === d.value) === index
        )
        .sort((a, b) => {
          const valueA = a.value === "worm" ? 6 : a.value ?? 0;
          const valueB = b.value === "worm" ? 6 : b.value ?? 0;
          return valueA - valueB;
        })
        .map((d) => (
          <button
            key={d.value}
            type="button"
            onClick={() =>
              play({ type: "chooseDiceValue", chosenDiceValue: d.value })
            }
          >
            {d.value}
          </button>
        ));
    }
  }
  return null;
};
