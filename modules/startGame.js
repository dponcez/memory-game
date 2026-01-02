import { states } from "../variables/globals.js";
import { incrementTimer } from "./gameController.js";
import { initQuitButton } from "./quitGame.js";

const { screen, quitGameBtn } = states;
export const startGame = () => {
  quitGameBtn.style.display = "flex";
  quitGameBtn.style.visibility = "visible";
  quitGameBtn.style.pointerEvents = "all";

  screen.remove();
  incrementTimer();
  initQuitButton();
};
