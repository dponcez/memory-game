import { selector, handler } from "../_fns/custom_functions.js";
import { formatTime } from "../utils/formatTime.js";
import { showVictoryModal } from "./victoryModal.js";
import { saveResult, getBestResult } from "../hooks/storage.js";
import { debounce } from "../utils/debounce.js";
import { lanchConfetti } from "../utils/confetti.js";

export const stopGame = (gameData, interval, resetGame) => {
  const { score, movements, elapsedTime } = gameData;
  const audio = new Audio("../assets/audio/victory-game.mp3");

  const currentResult = {
    score: score,
    movements: movements,
    time: formatTime(elapsedTime),
  };

  const isNewRecord = saveResult(currentResult);
  const bestResult = getBestResult();

  showVictoryModal(currentResult, bestResult, isNewRecord);

  const resetGameBtn = selector("[data-reset-btn]");
  handler(resetGameBtn, "click", debounce(resetGame, 500, true));

  clearInterval(interval);
  lanchConfetti();
  audio.play();
};
