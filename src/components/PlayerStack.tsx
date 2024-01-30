import { mapWormValueToImgSrc } from "../functions";
import { BarbecueWorm } from "../types";

interface IProps {
  barbecueWormsStack: BarbecueWorm[];
}

export const PlayerStack = ({ barbecueWormsStack }: IProps) => {
  return (
    <>
      <div style={{ height: "40%" }}>
        {barbecueWormsStack.length > 0 && (
          <img
            src={mapWormValueToImgSrc(barbecueWormsStack[0].value)}
            alt={barbecueWormsStack[0].value.toString()}
            style={{ height: "100%" }}
          />
        )}
      </div>
      <p>
        &nbsp;
        {barbecueWormsStack.length > 0
          ? "+" + (barbecueWormsStack.length - 1)
          : ""}
        &nbsp;
      </p>
    </>
  );
};
