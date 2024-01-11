import { Action, IPickominoGame, PlayAction } from ".";

export interface IPickominoContext {
  game: IPickominoGame;
  actions: PlayAction[];
  play: (action: Action) => void;
}
