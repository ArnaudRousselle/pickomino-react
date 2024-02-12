import { createContext } from "react";
import { IGameMenuContext } from "../types";

export const GameMenuContext = createContext<IGameMenuContext>({
  currentGame: null,
  onClose: () => {},
  onLoadGame: () => {},
});
