import { IPickominoGame, PlayAction } from ".";

export interface IPickominoContext {
  game: IPickominoGame;
  actions: PlayAction[];
}
