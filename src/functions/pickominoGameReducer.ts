import { randomDiceValue } from ".";
import { defaultDice } from "../constants";
import { Action, IPickominoGame } from "../types";

export function pickominoGameReducer(
  game: IPickominoGame,
  action: Action
): IPickominoGame {
  switch (action.type) {
    case "launchDice": {
      if (
        !(
          game.currentStep.type === "playerTurn" &&
          game.currentStep.subStep === "mustLaunchDiceOrTakeWorm"
        )
      ) {
        console.warn("Mauvaise action");
        return game;
      }
      return {
        ...game,
        availableDice: game.availableDice.map((ad) => ({
          id: ad.id,
          value: randomDiceValue(),
        })),
        currentStep: {
          ...game.currentStep,
          subStep: "mustChooseDiceValue",
        },
      };
    }
    case "chooseDiceValue": {
      if (
        !(
          game.currentStep.type === "playerTurn" &&
          game.currentStep.subStep === "mustChooseDiceValue"
        )
      ) {
        console.warn("Mauvaise action");
        return game;
      }
      if (game.selectedDice.some((sd) => sd.value === action.chosenDiceValue)) {
        console.warn(
          `La valeur '${action.chosenDiceValue}' a déjà été mise de côté`
        );
        return game;
      }
      return {
        ...game,
        selectedDice: [
          ...game.selectedDice,
          ...game.availableDice.filter(
            (ad) => ad.value === action.chosenDiceValue
          ),
        ],
        availableDice: game.availableDice.filter(
          (ad) => ad.value !== action.chosenDiceValue
        ),
        currentStep: {
          ...game.currentStep,
          subStep: "mustLaunchDiceOrTakeWorm",
        },
      };
    }
    case "takeWormFromBarbecueWorm": {
      if (
        !(
          game.currentStep.type === "playerTurn" &&
          game.currentStep.subStep === "mustLaunchDiceOrTakeWorm"
        ) ||
        !game.selectedDice.some((s) => s.value === "worm")
      ) {
        console.warn("Mauvaise action");
        return game;
      }

      const currentPlayerId = game.currentStep.playerId;

      const totalPoints = game.selectedDice.reduce(
        (p, c) => p + (c.value === "worm" ? 5 : c.value),
        0
      );

      const selectedWorm = game.barbecueWorms
        .slice(0)
        .sort((a, b) => b.value - a.value)
        .find((w) => !w.isDisabled && w.value <= totalPoints);

      if (!selectedWorm) {
        console.warn("Aucun jeton disponible");
        return game;
      }

      return {
        ...game,
        players: game.players.map((player) => ({
          ...player,
          barbecueWormsStack:
            player.id === currentPlayerId
              ? [selectedWorm, ...player.barbecueWormsStack]
              : player.barbecueWormsStack,
        })),
        barbecueWorms: game.barbecueWorms.filter(
          (bw) => bw.value !== selectedWorm.value
        ),
        currentStep: {
          type: "playerTurn",
          playerId:
            game.players[
              (game.players.findIndex((p) => p.id === currentPlayerId) + 1) %
                game.players.length
            ].id,
          subStep: "mustLaunchDiceOrTakeWorm",
        },
        availableDice: defaultDice,
        selectedDice: [],
      };
    }

    case "takeWormFromPlayer": {
      if (
        !(
          game.currentStep.type === "playerTurn" &&
          game.currentStep.subStep === "mustLaunchDiceOrTakeWorm"
        ) ||
        !game.selectedDice.some((s) => s.value === "worm")
      ) {
        console.warn("Mauvaise action");
        return game;
      }

      const currentPlayerId = game.currentStep.playerId;

      const totalPoints = game.selectedDice.reduce(
        (p, c) => p + (c.value === "worm" ? 5 : c.value),
        0
      );

      const infos = game.players
        .filter((p) => p.id !== currentPlayerId)
        .map((p) => ({
          playerId: p.id,
          availableWorm:
            p.barbecueWormsStack.length > 0 ? p.barbecueWormsStack[0] : null,
        }))
        .find((p) => p.availableWorm?.value === totalPoints);

      if (!infos) {
        console.warn("Aucun jeton disponible");
        return game;
      }

      const worm = infos.availableWorm;

      if (!worm) {
        console.warn("Aucun jeton disponible");
        return game;
      }

      return {
        ...game,
        players: game.players.map((player) => ({
          ...player,
          barbecueWormsStack:
            player.id === currentPlayerId
              ? [worm, ...player.barbecueWormsStack]
              : player.id === infos.playerId
              ? player.barbecueWormsStack.slice(1)
              : player.barbecueWormsStack,
        })),
        currentStep: {
          type: "playerTurn",
          playerId:
            game.players[
              (game.players.findIndex((p) => p.id === currentPlayerId) + 1) %
                game.players.length
            ].id,
          subStep: "mustLaunchDiceOrTakeWorm",
        },
        availableDice: defaultDice,
        selectedDice: [],
      };
    }

    case "quitMyTurn": {
      if (
        !(
          game.currentStep.type === "playerTurn" &&
          game.currentStep.subStep === "mustChooseDiceValue"
        )
      ) {
        console.warn("Mauvaise action");
        return game;
      }
      const currentPlayerId = game.currentStep.playerId;

      const wormAtTop = game.players
        .find((p) => p.id === currentPlayerId)
        ?.barbecueWormsStack.find((_, i) => i === 0);

      return {
        ...game,
        players: game.players.map((player) => ({
          ...player,
          barbecueWormsStack:
            player.id === currentPlayerId
              ? player.barbecueWormsStack.slice(1)
              : player.barbecueWormsStack,
        })),
        barbecueWorms: wormAtTop
          ? [...game.barbecueWorms, { ...wormAtTop, isDisabled: false }]
              .sort((a, b) => a.value - b.value)
              .map((bw, index, arr) => ({
                ...bw,
                isDisabled:
                  index === arr.length - 1 && bw.value !== wormAtTop.value,
              }))
          : game.barbecueWorms,
        currentStep: {
          type: "playerTurn",
          playerId:
            game.players[
              (game.players.findIndex((p) => p.id === currentPlayerId) + 1) %
                game.players.length
            ].id,
          subStep: "mustLaunchDiceOrTakeWorm",
        },
        availableDice: defaultDice,
        selectedDice: [],
      };
    }
  }
  return game;
}
