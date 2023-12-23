export type Step =
  | { type: "none" }
  | {
      type: "playerTurn";
      playerId: number;
      subStep: "mustLaunchDice" | "mustChooseDiceValue";
    };
