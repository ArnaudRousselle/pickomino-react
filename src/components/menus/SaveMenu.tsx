import { useContext } from "react";
import { PickominoContext } from "../../contexts";
import { GameMenuContext } from "../../contexts/GameMenuContext";
import { useSaves } from "../../hooks";

interface IProps {
  onCancel: () => void;
}

export const SaveMenu = ({ onCancel }: IProps) => {
  const { onClose } = useContext(GameMenuContext);
  const { saves, saveGame } = useSaves();

  const { game } = useContext(PickominoContext);

  const save = (id?: number) => {
    saveGame(game, id);
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
