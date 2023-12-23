import { Action, IPickominoGame } from ".";

export interface IPickominoContext {
  game: IPickominoGame;
  play: React.Dispatch<Action>;
}
