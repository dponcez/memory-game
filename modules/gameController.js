import { updateScreen, updateScore, updateMovements } from './updateStates.js';
import { createTable } from './createTable.js';
import { states } from '../variables/globals.js';
import { selector, handler } from '../_fns/custom_functions.js';
import { formatTime } from '../utils/formatTime.js';
import { showVictoryModal } from './victoryModal.js';

let score = 0;
let elapsedTime = 0;
let movements = 0;
let matchFound = 0;
let timeout = 1000;
let interval = null;
let cards = [];
let isDisabled = false;
const TOTAL_PAIRS = 6;

const { tableBody, timer_text, score_text, moves_text } = states;

const resetGame = (event) => {
  event.stopPropagation();
  initializeState();

  score = 0;
  elapsedTime = 0;
  movements = 0;
  matchFound = 0;
  cards;
  isDisabled;

  timer_text.textContent = '00:00';
  score_text.textContent = 0;
  moves_text.textContent = 0;
  tableBody.innerHTML = '';

  if(interval) clearInterval(interval);
  interval = null;

  createTable();
  incrementTimer();
}

const initializeState = () => {
  clearInterval(interval);
  interval = null;
}

export const incrementTimer = () => {
  if(interval) return; 

  interval = setInterval(() => {
    elapsedTime++;
    updateScreen(elapsedTime);
  }, timeout)
}

export const incrementScore = () => {
  setTimeout(() => {
    score += 10;
    updateScore(score)
  })
}

export const decrementScore = () => {
  setTimeout(() => {
    score -= 5;
    updateScore(score)
  })
}

export const incrementMovements = () => {
  setTimeout(() => {
    movements++;
    updateMovements(movements);
  })
}

export const stopMatch = () => {
  matchFound++;
  if(matchFound === TOTAL_PAIRS){
    showVictoryModal(score, movements, formatTime(elapsedTime));

    const resetGameBtn = selector('[data-reset-btn]');
    handler(resetGameBtn, 'click', resetGame);
    
    clearInterval(interval);
    return true;
  }

  return false
}