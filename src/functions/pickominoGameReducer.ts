import { randomDiceValue } from ".";
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
          game.currentStep.subStep === "mustLaunchDice"
        )
      )
        return game;
      return {
        ...game,
        availableDice: game.availableDice.map(() => ({
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
      )
        return game;
      //todo: vérifier que la valeur n'a pas déjà été sélectionnée
      return { ...game }; //todo ARNAUD: à continuer
    }
  }
  return game;
}
