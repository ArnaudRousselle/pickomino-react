import { useContext } from "react";
import { PickominoContext } from "../contexts";
import { mapWormValueToImgSrc } from "../functions";

const allValues = Array(16)
  .fill(21)
  .map((v, i) => parseInt(v + i));

export const BarbecueWorms = () => {
  const {
    game: { barbecueWorms },
  } = useContext(PickominoContext);
  return allValues.map((value) => {
    const index = barbecueWorms.findIndex((bw) => bw.value === value);

    if (index < 0)
      return (
        <span
          key={value}
          style={{ display: "inline-block", width: "6.25%" }}
        ></span>
      );

    return (
      <img
        key={value}
        src={mapWormValueToImgSrc(barbecueWorms[index].value)}
        style={{
          opacity: barbecueWorms[index].isDisabled ? 0.1 : 1,
          width: "6.25%",
        }}
        alt={value.toString()}
      />
    );
  });
};
