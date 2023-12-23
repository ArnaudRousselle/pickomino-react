import { useContext } from "react";
import { PickominoContext } from "../contexts";

export const SelectedDice = () => {
  const {
    game: { selectedDice },
  } = useContext(PickominoContext);
  return (
    <div>
      <h2>Dès sélectionnés</h2>
      {selectedDice.map(({ id, value }) => (
        <div key={id}>{value}</div>
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
