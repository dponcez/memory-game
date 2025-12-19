import { updateScreen, updateScore } from './updateStates.js';
import { createTable } from './createTable.js';
import { states } from '../variables/globals.js';

let score = 0;
let elapsedTime = 0;
let matchFound = 0;
let timeout = 1000;
let interval = null;
let startTime = 0;
let endTime = 0;
const TOTAL_PAIRS = 6;

const { tableBody, timer_text, score_text } = states;

const resetGame = (event) => {
  event.stopPropagation();

  // stopTimer() or initializeState() goes here

  score = 0;
  elapsedTime = 0;
  matchFound = 0;
  startTime = new Date();
  endTime = 0;
  timer_text.textContent = 0;
  score_text.textContent = 0;
  tableBody.innerHTML = '';

  if(interval) clearInterval(interval);
  interval = null;

  createTable();

  // initializeTimer(); goes here
}

export const initializeTimer = () => {
  interval = setInterval(() => {
    elapsedTime++;
    updateScreen(elapsedTime)
  }, timeout)
}

export const initializeScore = () => {
  setTimeout(() => {
    score++;
    updateScore(score)
  }, 100)
}

export const incrementMatch = () => {
  matchFound++;
  if(matchFound === TOTAL_PAIRS){
    tableBody.innerHTML = `
      <div class="stop--game__info">
        <header class="header">
          <h2 class="title">¡Congratulations! You won.</h2>
        </header>
        <div class="info--container">
          <p class="info">Your score: <span>${score}</span></p>
          <p class="info">Your time: <span>${elapsedTime}</span></p>
        </div>
        <button class="btn reset--btn" data-reset-btn>reset game</button>
      </div>
    `;

    endTime = new Date();
    startTime = 0;
    clearInterval(interval);

    // const resetGame = states.resetGameBtn;
    // handler(resetGame, 'click', initializeState);
    return true;
  }

  return false
}