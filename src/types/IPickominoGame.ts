import { BarbecueWorm, Dice, Step } from ".";

export interface IPickominoGame {
  players: { id: number; name: string; barbecueWormsStack: BarbecueWorm[] }[];
  barbecueWorms: Array<
    BarbecueWorm & {
      isDisabled: boolean;
    }
  >;
  availableDice: Dice[];
  selectedDice: Dice[];
  currentStep: Step;
}
