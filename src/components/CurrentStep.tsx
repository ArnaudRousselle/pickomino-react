import { useContext } from "react";
import { PickominoContext } from "../contexts";

export const CurrentStep = () => {
  const {
    game: {
      currentStep: { type, ...others },
    },
  } = useContext(PickominoContext);

  return (
    <div>
      {type} : {JSON.stringify(others)}
    </div>
  );
};
