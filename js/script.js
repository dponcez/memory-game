import { createTable } from "../modules/createTable.js";
import { handler } from "../_fns/custom_functions.js";
import { states } from "../variables/globals.js";
import { startGame } from "../modules/startGame.js";
import { initQuitButton } from "../modules/quitGame.js";
import { debounce } from "../utils/debounce.js";

const { startGameBtn } = states;

handler(startGameBtn, "click", debounce(startGame, 500, true));
initQuitButton();
createTable();
