import { Action, IPickominoGame, PlayAction } from "../types";

export function pickominoActionsCreator(
  game: IPickominoGame,
  play: React.Dispatch<Action>
): PlayAction[] {
  const { currentStep } = game;

  if (currentStep.type !== "playerTurn") return [];

  switch (currentStep.subStep) {
    case "mustLaunchDiceOrTakeWorm": {
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

      const actions = [
        {
          play: () => play({ type: "launchDice" }),
          infos: { text: "lancer les dés" },
        },
      ];

      if (wormAvailableFromBarbecue)
        actions.push({
          play: () => play({ type: "takeWormFromBarbecueWorm" }),
          infos: {
            text: `Prendre le jeton ${wormAvailableFromBarbecue.value} dans la brochette`,
          },
        });

      if (wormAvailableFromPlayer)
        actions.push({
          play: () => play({ type: "takeWormFromPlayer" }),
          infos: {
            text: `Prendre le jeton ${wormAvailableFromPlayer.availableWormValue} chez ${wormAvailableFromPlayer.playerName}`,
          },
        });

      return actions;
    }

    case "mustChooseDiceValue": {
      const { availableDice, selectedDice, players } = game;

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
        const wormAtTop = players
          .find((p) => p.id === currentStep.playerId)
          ?.barbecueWormsStack.find((_, i) => i === 0);

        if (wormAtTop)
          return [
            {
              play: () => play({ type: "quitMyTurn" }),
              infos: { text: `Replacer le pikomino ${wormAtTop.value}` },
            },
          ];
        else
          return [
            {
              play: () => play({ type: "quitMyTurn" }),
              infos: { text: "Abandonner" },
            },
          ];
      } else
        return dice.map((d) => ({
          play: () =>
            play({ type: "chooseDiceValue", chosenDiceValue: d.value }),
          infos: { text: `Prendre la valeur ${d.value} (x${d.occurences})` },
        }));
    }

    default:
      return [];
  }
}
