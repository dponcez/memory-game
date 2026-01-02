export const lanchConfetti = () => {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.5 },
    colors: ["#ff0000", "#00ff00", "#13dfff", "#fafa2aff", "#549dff"],
  });

  setTimeout(() => {
    confetti({
      particleCount: 100,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
    });
    confetti({
      particleCount: 100,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
    });
  }, 250);
};
