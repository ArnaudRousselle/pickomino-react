import { useReducer, useState } from "react";
import { BarbecueWorms, EndOfGameSummary, Players } from ".";
import { PickominoContext } from "../contexts";
import { GameMenuContext } from "../contexts/GameMenuContext";
import { pickominoActionsCreator, pickominoGameReducer } from "../functions";
import { GameMenu } from "./menus";

export const Pickomino = () => {
  const [showMenu, setShowMenu] = useState(true);

  const [game, play] = useReducer(pickominoGameReducer, null);

  if (showMenu)
    return (
      <GameMenuContext.Provider
        value={{
          currentGame: game,
          onLoadGame: (g) => play({ type: "loadGame", game: g }),
          onClose: () => setShowMenu(false),
        }}
      >
        <GameMenu />
      </GameMenuContext.Provider>
    );

  if (!game) return null;

  return (
    <PickominoContext.Provider
      value={{
        game,
        actions: pickominoActionsCreator(game),
        play,
      }}
    >
      <div style={{ textAlign: "right" }}>
        <button type="button" onClick={() => setShowMenu(true)}>
          Menu
        </button>
      </div>
      <div style={{ height: "25%" }}>
        <BarbecueWorms />
      </div>
      <div style={{ height: "40%" }}>
        <Players />
      </div>
      <EndOfGameSummary />
    </PickominoContext.Provider>
  );
};
