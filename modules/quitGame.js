import { selector, handler } from "../_fns/custom_functions.js";

export const quitGame = () => {
  const quitModal = selector("[data-quit-modal]");
  const confirmBtn = selector("[data-confirm-quit]");
  const cancelBtn = selector("[data-cancel-quit]");

  // Show modal
  quitModal.classList.remove("hidden");

  const handleConfirm = () => location.reload();

  const handleCancel = () => {
    quitModal.classList.add("hidden");
    removeListeners();
  };

  const removeListeners = () => {
    confirmBtn.removeEventListener("click", handleConfirm);
    cancelBtn.removeEventListener("click", handleCancel);
  };

  handler(confirmBtn, "click", handleConfirm);
  handler(cancelBtn, "click", handleCancel);
};

export const initQuitButton = () => {
  const quitBtn = selector("[data-quit-btn]");
  handler(quitBtn, "click", quitGame);
};
