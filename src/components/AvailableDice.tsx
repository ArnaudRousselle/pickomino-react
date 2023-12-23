import { useContext } from "react";
import { PickominoContext } from "../contexts";

export const AvailableDice = () => {
  const {
    game: { availableDice },
  } = useContext(PickominoContext);
  return (
    <div>
      <h2>Dès disponibles</h2>
      {availableDice.map(({ id, value }) => (
        <div key={id}>{value}</div>
      ))}
    </div>
  );
};
