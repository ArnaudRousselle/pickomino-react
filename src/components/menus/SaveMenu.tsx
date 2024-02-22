import { useContext } from "react";
import { GameMenuContext } from "../../contexts/GameMenuContext";
import { useSaves } from "../../hooks";

interface IProps {
  onCancel: () => void;
}

export const SaveMenu = ({ onCancel }: IProps) => {
  const { onClose, currentGame } = useContext(GameMenuContext);
  const { saves, saveGame } = useSaves();

  const save = (id?: number) => {
    if (!currentGame) return;
    saveGame(currentGame, id);
    onClose();
  };

  return (
    <div>
      Sauvegarder{" "}
      {saves.map((s) => (
        <div key={s.id}>
          {s.id}
          <button type="button" onClick={() => save(s.id)}>
            X
          </button>
        </div>
      ))}
      <button type="button" onClick={() => save()}>
        +
      </button>
      <button type="button" onClick={onCancel}>
        Retour
      </button>
    </div>
  );
};
