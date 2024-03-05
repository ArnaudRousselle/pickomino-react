import { useContext } from "react";
import { GameMenuContext } from "../../contexts/GameMenuContext";
import { useSaves } from "../../hooks";
import { IPickominoGame } from "../../types";

interface IProps {
  onCancel: () => void;
}

export const LoadMenu = ({ onCancel }: IProps) => {
  const { onClose, onLoadGame } = useContext(GameMenuContext);
  const { saves } = useSaves();

  const load = (game: IPickominoGame) => {
    onLoadGame(game);
    onClose();
  };

  console.log(saves);

  return (
    <div className="menu">
      <h1>Charger</h1>
      {saves.map((s) => (
        <div key={s.id}>
          {new Date(s.date).toLocaleString("fr")}
          <button type="button" onClick={() => load(s.game)}>
            X
          </button>
        </div>
      ))}
      <button type="button" onClick={onCancel}>
        Retour
      </button>
    </div>
  );
};
