export type Step =
  | {
      type: "playerTurn";
      playerId: number;
      subStep: "mustLaunchDiceOrTakeWorm" | "mustChooseDiceValue";
    }
  | { type: "endOfGame" };
