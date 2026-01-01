import { states } from '../variables/globals.js';

const { tableBody } = states;
export const showVictoryModal = (score, movements, time) => {
  tableBody.innerHTML = `
    <div class="victory--modal">
      <header class="header">
        <h2 class="title">¡victory!</h2>
      </header>
      <div class="info--container">
        <p class="info">score: <strong>${score}</strong></p>
        <p class="info">movements: <strong>${movements}</strong></p>
        <p class="info">time: <strong>${time}</strong></p>
      </div>
      <button class="btn reset--game__btn" data-reset-btn>reset game</button>
    </div>
  `;
}