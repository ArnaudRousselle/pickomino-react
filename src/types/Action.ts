import { DiceValue } from ".";

export type Action =
  | {
      type: "launchDice";
    }
  | { type: "chooseDiceValue"; chosenDiceValue: DiceValue }
  | { type: "takeWormFromBarbecueWorm" }
  | { type: "takeWormFromPlayer" };
