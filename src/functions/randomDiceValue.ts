import { DiceValue } from "../types";

export function randomDiceValue(): DiceValue {
  const value = Math.floor(Math.random() * 7 + 1);
  if (value === 1 || value === 2 || value === 3 || value === 4 || value === 5)
    return value;
  return "worm";
}
