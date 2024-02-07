import { DiceValue, IPickominoGame } from ".";

export type Action =
  | {
      type: "launchDice";
    }
  | { type: "chooseDiceValue"; chosenDiceValue: DiceValue }
  | { type: "takeWormFromBarbecueWorm" }
  | { type: "takeWormFromPlayer" }
  | { type: "quitMyTurn" }
  | {
      type: "loadGame";
      game: IPickominoGame;
    };
