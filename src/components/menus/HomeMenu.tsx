import { useContext } from "react";
import { GameMenuContext } from "../../contexts/GameMenuContext";
import { MenuScreen } from "./types";

interface IProps {
  setSelectedScreen: (menu: MenuScreen) => void;
}

export const HomeMenu = ({ setSelectedScreen }: IProps) => {
  const { currentGame, onClose } = useContext(GameMenuContext);
  return (
    <div className="menu">
      <h1>Menu principal</h1>
      <button
        type="button"
        onClick={() => setSelectedScreen(MenuScreen.New)}
        style={{ textAlign: "center" }}
      >
        Nouvelle partie
      </button>
      <br />
      <button type="button" onClick={() => setSelectedScreen(MenuScreen.Load)}>
        Charger une partie
      </button>
      <br />
      {currentGame && (
        <>
          <button
            type="button"
            onClick={() => setSelectedScreen(MenuScreen.Save)}
          >
            Sauvegarde la partie
          </button>
          <br />
        </>
      )}
      {currentGame && (
        <button type="button" onClick={onClose}>
          Fermer le menu
        </button>
      )}
    </div>
  );
};
