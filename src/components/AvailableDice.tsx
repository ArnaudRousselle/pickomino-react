import { useContext } from "react";
import { PickominoContext } from "../contexts";
import { mapDiceValueToImgSrc } from "../functions";

export const AvailableDice = () => {
  const {
    game: { availableDice },
  } = useContext(PickominoContext);
  return (
    <div>
      <h2>Dès disponibles</h2>
      {availableDice.map(({ id, value }) => (
        <img
          key={id}
          width="48px"
          src={mapDiceValueToImgSrc(value)}
          alt={value.toString()}
        />
      ))}
    </div>
  );
};
