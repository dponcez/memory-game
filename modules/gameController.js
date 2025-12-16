import { updateScreen } from './updateScreen.js';
import { createTable } from './createTable.js';

let score = 0;
let elepasedTime = 0;
let matchFound = 0;
let timeout = 1000;
let interval = null;
let startTime = 0;
let endTime = 0;
const TOTAL_PAIRS = 6;

export const initializeState = () => {
  score = 0;
  elepasedTime = 0;
  matchFound = 0;
  startTime = now.Date();
  endTime = 0;

  if(interval) clearInterval(interval);
  interval = null;

  createTable()
}

export const initializeTimer = () => {
  interval = setInterval(() => {
    elepasedTime++;
    updateScreen(elepasedTime)
  }, timeout)
}

// export const incrementMatch = () => {
//   matchFound++;
//   if(matchFound === TOTAL_PAIRS){

//     endTime = now.Date();
//     clearInterval(interval);
//     return true;
//   }

//   return false
// }