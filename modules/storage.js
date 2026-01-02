export const STORAGE_KEY = "memory_game_best_score";

export const saveResult = (currentPayload) => {
  const bestResult = getBestResult();

  if (!bestResult || currentPayload.score > bestResult.score) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(currentPayload));
    return true;
  }

  return false;
};

export const getBestResult = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : null;
};
