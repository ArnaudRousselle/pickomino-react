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

  return (
    <div>
      Charger{" "}
      {saves.map((s) => (
        <div key={s.id}>
          {s.id}
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
