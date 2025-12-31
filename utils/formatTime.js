export const formatTime = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds/ 60);
  const seconds = totalSeconds % 60;

  const GET_CURRENT_MINS = minutes < 10 ? `0${minutes}` : String(minutes).padStart(2, '0');
  const GET_CURRENT_SECS = seconds < 10 ? `0${seconds}` : String(seconds).padStart(2, '0');

  return `${GET_CURRENT_MINS}:${GET_CURRENT_SECS}`;
}