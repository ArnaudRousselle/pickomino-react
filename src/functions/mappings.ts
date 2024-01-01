import Barbecue21 from "../assets/21.svg";
import Barbecue22 from "../assets/22.svg";
import Barbecue23 from "../assets/23.svg";
import Barbecue24 from "../assets/24.svg";
import Barbecue25 from "../assets/25.svg";
import Barbecue26 from "../assets/26.svg";
import Barbecue27 from "../assets/27.svg";
import Barbecue28 from "../assets/28.svg";
import Barbecue29 from "../assets/29.svg";
import Barbecue30 from "../assets/30.svg";
import Barbecue31 from "../assets/31.svg";
import Barbecue32 from "../assets/32.svg";
import Barbecue33 from "../assets/33.svg";
import Barbecue34 from "../assets/34.svg";
import Barbecue35 from "../assets/35.svg";
import Barbecue36 from "../assets/36.svg";
import Dice1 from "../assets/dice_1.svg";
import Dice2 from "../assets/dice_2.svg";
import Dice3 from "../assets/dice_3.svg";
import Dice4 from "../assets/dice_4.svg";
import Dice5 from "../assets/dice_5.svg";
import DiceWorm from "../assets/dice_picko.svg";
import { DiceValue, WormValue } from "../types";

export function mapDiceValueToImgSrc(value: DiceValue) {
  switch (value) {
    case 1:
      return Dice1;
    case 2:
      return Dice2;
    case 3:
      return Dice3;
    case 4:
      return Dice4;
    case 5:
      return Dice5;
    case "worm":
      return DiceWorm;
  }
}

export function mapWormValueToImgSrc(value: WormValue) {
  switch (value) {
    case 21:
      return Barbecue21;
    case 22:
      return Barbecue22;
    case 23:
      return Barbecue23;
    case 24:
      return Barbecue24;
    case 25:
      return Barbecue25;
    case 26:
      return Barbecue26;
    case 27:
      return Barbecue27;
    case 28:
      return Barbecue28;
    case 29:
      return Barbecue29;
    case 30:
      return Barbecue30;
    case 31:
      return Barbecue31;
    case 32:
      return Barbecue32;
    case 33:
      return Barbecue33;
    case 34:
      return Barbecue34;
    case 35:
      return Barbecue35;
    case 36:
      return Barbecue36;
  }
}
