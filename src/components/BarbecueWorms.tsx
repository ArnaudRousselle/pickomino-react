import { useContext } from "react";
import { PickominoContext } from "../contexts";

export const BarbecueWorms = () => {
  const {
    game: { barbecueWorms },
  } = useContext(PickominoContext);
  return (
    <div>
      {barbecueWorms.map((b) => (
        <span key={b.value}>
          {b.value} ({b.wormsCount} worm{b.wormsCount >= 2 ? "s" : ""})
        </span>
      ))}
    </div>
  );
};
