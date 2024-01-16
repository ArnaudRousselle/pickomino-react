import { useContext } from "react";
import { PickominoContext } from "../contexts";
import { mapDiceValueToImgSrc } from "../functions";

export const SelectedDice = () => {
  const {
    game: { selectedDice },
  } = useContext(PickominoContext);

  if (selectedDice.length === 0) return null;

  return (
    <div>
      <h2>Dès sélectionnés</h2>
      {selectedDice.map(({ id, value }) => (
        <img
          key={id}
          width="48px"
          src={mapDiceValueToImgSrc(value)}
          alt={value.toString()}
        />
      ))}
      <h2>
        Total points :{" "}
        {selectedDice.reduce(
          (p, c) => p + (c.value === "worm" ? 5 : c.value),
          0
        )}
      </h2>
    </div>
  );
};
