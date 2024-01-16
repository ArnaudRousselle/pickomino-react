import { createContext } from "react";
import { IPickominoContext } from "../types";

export const PickominoContext = createContext<IPickominoContext>({
  game: {
    players: [],
    barbecueWorms: [],
    availableDice: [],
    selectedDice: [],
    currentStep: { type: "endOfGame" },
  },
  actions: [],
  play: () => {},
});
