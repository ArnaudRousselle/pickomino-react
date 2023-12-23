import { useContext } from "react";
import { PickominoContext } from "../contexts";

export const Play = () => {
  const { game, play } = useContext(PickominoContext);
  const { currentStep } = game;

  if (currentStep.type === "playerTurn") {
    if (currentStep.subStep === "mustLaunchDiceOrTakeWorm") {
      const { selectedDice, barbecueWorms, players } = game;

      const totalPoints = selectedDice.reduce(
        (p, c) => p + (c.value === "worm" ? 5 : c.value),
        0
      );

      const hasPikomino = selectedDice.some((d) => d.value === "worm");

      const wormAvailableFromBarbecue = barbecueWorms
        .filter(() => hasPikomino)
        .sort((a, b) => b.value - a.value)
        .find((n) => !n.isDisabled && n.value <= totalPoints);

      const wormAvailableFromPlayer = players
        .filter((p) => p.id !== currentStep.playerId && hasPikomino)
        .map((p) => ({
          playerName: p.name,
          availableWormValue:
            p.barbecueWormsStack.length > 0
              ? p.barbecueWormsStack[0].value
              : -1,
        }))
        .find((p) => p.availableWormValue === totalPoints);

      return (
        <>
          <button type="button" onClick={() => play({ type: "launchDice" })}>
            Lancer les dés
          </button>
          {wormAvailableFromBarbecue && (
            <button
              type="button"
              onClick={() => play({ type: "takeWormFromBarbecueWorm" })}
            >
              Prendre le jeton {wormAvailableFromBarbecue.value} dans la
              brochette
            </button>
          )}
          {wormAvailableFromPlayer && (
            <button
              type="button"
              onClick={() => play({ type: "takeWormFromPlayer" })}
            >
              Prendre le jeton {wormAvailableFromPlayer.availableWormValue} du
              joueur {wormAvailableFromPlayer.playerName}
            </button>
          )}
        </>
      );
    }
    if (currentStep.subStep === "mustChooseDiceValue") {
      const { availableDice, selectedDice, players } = game;

      const wormAtTop = players
        .find((p) => p.id === currentStep.playerId)
        ?.barbecueWormsStack.find((_, i) => i === 0);

      const dice = availableDice
        .filter((d) => !selectedDice.some((sd) => sd.value === d.value))
        .map((d) => ({
          value: d.value,
          occurences: availableDice.filter((ad) => ad.value === d.value).length,
        }))
        .filter(
          (d, index, arr) => arr.findIndex((a) => a.value === d.value) === index
        )
        .sort((a, b) => {
          const valueA = a.value === "worm" ? 6 : a.value;
          const valueB = b.value === "worm" ? 6 : b.value;
          return valueA - valueB;
        });

      if (dice.length === 0) {
        return (
          <button type="button" onClick={() => play({ type: "quitMyTurn" })}>
            {wormAtTop
              ? "Replacer le pikomino " + wormAtTop.value
              : "Abandonner"}
          </button>
        );
      }

      return dice.map((d) => (
        <button
          key={d.value}
          type="button"
          onClick={() =>
            play({ type: "chooseDiceValue", chosenDiceValue: d.value })
          }
        >
          Prendre la valeur {d.value} (x{d.occurences})
        </button>
      ));
    }
  }
  return null;
};
