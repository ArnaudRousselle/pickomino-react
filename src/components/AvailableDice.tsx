import { useContext } from "react";
import { PickominoContext } from "../contexts";
import { mapDiceValueToImgSrc } from "../functions";

export const AvailableDice = () => {
  const {
    game: { availableDice },
    actions,
    play,
  } = useContext(PickominoContext);
  const launchDiceAction = actions.find((a) => a.type === "launchDice");
  return (
    <div>
      <h2>Dès disponibles</h2>
      {availableDice.map(({ id, value }) => {
        const pickAction = actions.find(
          (a) => a.type === "chooseDiceValue" && a.chosenDiceValue === value
        );
        return (
          <img
            key={id}
            width="48px"
            src={mapDiceValueToImgSrc(value)}
            alt={value.toString()}
            style={{
              opacity: pickAction ? 1 : 0.5,
              cursor: pickAction ? "pointer" : "not-allowed",
            }}
            onClick={() => {
              if (!pickAction) return;
              play(pickAction);
            }}
          />
        );
      })}
      {launchDiceAction && (
        <button type="button" onClick={() => play(launchDiceAction)}>
          {launchDiceAction.text}
        </button>
      )}
    </div>
  );
};
