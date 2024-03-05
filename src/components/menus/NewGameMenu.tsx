import { useContext, useState } from "react";
import { defaultDice } from "../../constants";
import { GameMenuContext } from "../../contexts/GameMenuContext";

interface IProps {
  onCancel: () => void;
}

export const NewGameMenu = ({ onCancel }: IProps) => {
  const { onLoadGame, onClose } = useContext(GameMenuContext);
  const [players, setPlayers] = useState<string[]>(["Joueur 1", "Joueur 2"]);
  const startNewGame = () => {
    if (players.length < 2) return;

    onLoadGame({
      players: players.map((name, index) => ({
        id: index + 1,
        name,
        barbecueWormsStack: [],
      })),
      barbecueWorms: [
        {
          value: 21,
          wormsCount: 1,
          isDisabled: false,
        },
        {
          value: 22,
          wormsCount: 1,
          isDisabled: false,
        },
        {
          value: 23,
          wormsCount: 1,
          isDisabled: false,
        },
        {
          value: 24,
          wormsCount: 1,
          isDisabled: false,
        },
        {
          value: 25,
          wormsCount: 2,
          isDisabled: false,
        },
        {
          value: 26,
          wormsCount: 2,
          isDisabled: false,
        },
        {
          value: 27,
          wormsCount: 2,
          isDisabled: false,
        },
        {
          value: 28,
          wormsCount: 2,
          isDisabled: false,
        },
        {
          value: 29,
          wormsCount: 3,
          isDisabled: false,
        },
        {
          value: 30,
          wormsCount: 3,
          isDisabled: false,
        },
        {
          value: 31,
          wormsCount: 3,
          isDisabled: false,
        },
        {
          value: 32,
          wormsCount: 3,
          isDisabled: false,
        },
        {
          value: 33,
          wormsCount: 4,
          isDisabled: false,
        },
        {
          value: 34,
          wormsCount: 4,
          isDisabled: false,
        },
        {
          value: 35,
          wormsCount: 4,
          isDisabled: false,
        },
        {
          value: 36,
          wormsCount: 4,
          isDisabled: false,
        },
      ],
      availableDice: defaultDice,
      selectedDice: [],
      currentStep: {
        type: "playerTurn",
        playerId: 1,
        subStep: "mustLaunchDiceOrTakeWorm",
      },
    });
    onClose();
  };

  const addPlayer = () => {
    setPlayers((players) => [...players, "Joueur " + (players.length + 1)]);
  };

  return (
    <div className="menu">
      <h1>Nouvelle partie</h1>
      {players.map((name, index) => (
        <div key={index}>
          <input
            type="text"
            value={name}
            onChange={(e) =>
              setPlayers((players) => [
                ...players.slice(0, index),
                e.target.value,
                ...players.slice(index + 1),
              ])
            }
          />
          <button
            type="button"
            onClick={() =>
              setPlayers((players) => [
                ...players.slice(0, index),
                ...players.slice(index + 1),
              ])
            }
          >
            Supprimer
          </button>
        </div>
      ))}
      <button type="button" onClick={addPlayer}>
        Ajouter un joueur
      </button>
      <br />
      <button type="button" onClick={startNewGame}>
        Démarrer
      </button>
      <br />
      <button type="button" onClick={onCancel}>
        Retour
      </button>
    </div>
  );
};
