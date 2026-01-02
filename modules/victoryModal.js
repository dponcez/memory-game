import { states } from "../variables/globals.js";

const { tableBody } = states;
export const showVictoryModal = (current, best, isNewRecord) => {
  const titleMessage = isNewRecord ? "¡NEW RÉCORD!" : "¡Victory!";

  const bestScore = best ? best.score : current.score;
  const bestMoves = best ? best.movements : current.movements;
  const bestTime = best ? best.time : current.time;

  tableBody.innerHTML = `
    <div class="victory--modal">
      <header class="header">
        <h2 class="title" style="${
          isNewRecord ? "color: var(--clr-yellow);" : ""
        }">${titleMessage}</h2>
      </header>
      
      <div class="results--grid">
        <!-- Current Stats -->
        <div class="current--stats stats">
            <h3>Actual</h3>
            <p class="info">score: <strong>${current.score}</strong></p>
            <p class="info">movements: <strong>${current.movements}</strong></p>
            <p class="info">time: <strong>${current.time}</strong></p>
        </div>

        <!-- Best Stats -->
        <div class="best--stats stats">
            <h3>Best Histórical</h3>
            <p class="info">score: <strong>${bestScore}</strong></p>
            <p class="info">movements: <strong>${bestMoves}</strong></p>
            <p class="info">time: <strong>${bestTime}</strong></p>
        </div>
      </div>

      <button class="btn reset--game__btn" data-reset-btn>play again</button>
    </div>
  `;
};
