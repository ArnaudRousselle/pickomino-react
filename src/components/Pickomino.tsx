import { useReducer } from "react";
import { AvailableDice, BarbecueWorms, CurrentStep, Play, Players } from ".";
import { PickominoContext } from "../contexts";
import { pickominoGameReducer } from "../functions";

export const Pickomino = () => {
  const [game, play] = useReducer(pickominoGameReducer, {
    players: [
      {
        id: 1,
        name: "Player 1",
        barbecueWormsStack: [],
      },
      {
        id: 2,
        name: "Player 2",
        barbecueWormsStack: [],
      },
      {
        id: 3,
        name: "Player 3",
        barbecueWormsStack: [],
      },
    ],
    barbecueWorms: [
      {
        value: 21,
        wormsCount: 1,
        isDisabled: false,
      },
      {
        value: 22,
        wormsCount: 1,
        isDisabled: false,
      },
      {
        value: 23,
        wormsCount: 1,
        isDisabled: false,
      },
      {
        value: 24,
        wormsCount: 1,
        isDisabled: false,
      },
      {
        value: 25,
        wormsCount: 2,
        isDisabled: false,
      },
      {
        value: 26,
        wormsCount: 2,
        isDisabled: false,
      },
      {
        value: 27,
        wormsCount: 2,
        isDisabled: false,
      },
      {
        value: 28,
        wormsCount: 2,
        isDisabled: false,
      },
      {
        value: 29,
        wormsCount: 3,
        isDisabled: false,
      },
      {
        value: 30,
        wormsCount: 3,
        isDisabled: false,
      },
      {
        value: 31,
        wormsCount: 3,
        isDisabled: false,
      },
      {
        value: 32,
        wormsCount: 3,
        isDisabled: false,
      },
      {
        value: 33,
        wormsCount: 4,
        isDisabled: false,
      },
      {
        value: 34,
        wormsCount: 4,
        isDisabled: false,
      },
      {
        value: 35,
        wormsCount: 4,
        isDisabled: false,
      },
      {
        value: 36,
        wormsCount: 4,
        isDisabled: false,
      },
    ],
    availableDice: [
      { value: 1 },
      { value: 1 },
      { value: 1 },
      { value: 1 },
      { value: 1 },
      { value: 1 },
      { value: 1 },
      { value: 1 },
    ],
    selectedDice: [],
    currentStep: {
      type: "playerTurn",
      playerId: 1,
      subStep: "mustLaunchDice",
    },
  });

  return (
    <PickominoContext.Provider value={{ game, play }}>
      <Players />
      <BarbecueWorms />
      <AvailableDice />
      <CurrentStep />
      <Play />
    </PickominoContext.Provider>
  );
};
