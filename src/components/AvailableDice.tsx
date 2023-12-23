import { useContext } from "react";
import { PickominoContext } from "../contexts";

export const AvailableDice = () => {
  const {
    game: { availableDice },
  } = useContext(PickominoContext);
  return (
    <div>
      {availableDice.map((d, i) => (
        <div key={i}>
          Dice {i + 1}: {d.value ?? "non lancé"}
        </div>
      ))}
    </div>
  );
};
