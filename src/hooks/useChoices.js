import { useEffect, useState } from "react";
import { options } from "../data/options";
import { getResult } from "../utils/getResult";

export function useChoices() {
  const [disabled, setDisabled] = useState(false);
  const [userChoice, setUserChoice] = useState(null);
  const [userMessage, setUserMessage] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [computerMessage, setComputerMessage] = useState(null);
  const [result, setResult] = useState(null);
  useEffect(() => {
    if (userChoice !== null) {
      setUserMessage(
        `Has elegido ${options[userChoice]?.emoji} - ${options[userChoice]?.name}`
      );
    }
  }, [userChoice]);
  useEffect(() => {
    if (computerChoice !== null) {
      setComputerMessage(
        `Has elegido ${options[computerChoice]?.emoji} - ${options[computerChoice]?.name}`
      );
    }
  }, [computerChoice]);
  function reset() {
    setUserChoice(null);
    setUserMessage(null);
    setComputerChoice(null);
    setComputerMessage(null);
    setDisabled(false);
    setResult(null);
  }
  function handleSelect(option) {
    setUserChoice(option);
    setDisabled(true);
    const randomChoice = Math.floor(Math.random() * 5);
    setTimeout(() => {
      setComputerChoice(randomChoice);
    }, 1500);
    setTimeout(() => {
      setResult(getResult(option, randomChoice));
    }, 3000);
    clearTimeout();
  }
  return {
    userChoice,
    userMessage,
    computerChoice,
    computerMessage,
    result,
    disabled,
    handleSelect,
    reset
  };
}
