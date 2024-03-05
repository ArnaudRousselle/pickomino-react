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
    <div className="menu">
      <h1>Sauvegarder</h1>
      {saves.map((s) => (
        <div key={s.id}>
          {s.id}
          <button type="button" onClick={() => save(s.id)}>
            écraser
          </button>
        </div>
      ))}
      <button type="button" onClick={() => save()}>
        Nouvelle sauvegarde
      </button>
      <br />
      <button type="button" onClick={onCancel}>
        Retour
      </button>
    </div>
  );
};
