import { BarbecueWorm, Dice, Step } from ".";
import { PlayerType } from "./PlayerType";

export interface IPickominoGame {
  players: PlayerType[];
  barbecueWorms: Array<
    BarbecueWorm & {
      isDisabled: boolean;
    }
  >;
  availableDice: Dice[];
  selectedDice: Dice[];
  currentStep: Step;
}
