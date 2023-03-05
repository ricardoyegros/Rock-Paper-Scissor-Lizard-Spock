import { options } from "../data/options";

export function getResult(option, randomChoice) {
    if (option == randomChoice) {
      return 0;
    }
    if (options[option].beats.includes(randomChoice)) {
      return 1;
    }
    return 2;
  }