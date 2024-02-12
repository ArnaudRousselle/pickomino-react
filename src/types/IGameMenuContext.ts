import { IPickominoGame } from ".";

export interface IGameMenuContext {
  currentGame: IPickominoGame | null;
  onLoadGame: (game: IPickominoGame) => void;
  onClose: () => void;
}
