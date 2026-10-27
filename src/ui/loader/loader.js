export function showLoading() {
  const loadingEl = document.getElementById("loading");
  if (loadingEl) loadingEl.classList.remove("hidden");
}

export function hideLoading() {
  const loadingEl = document.getElementById("loading");
  if (loadingEl) loadingEl.classList.add("hidden");
}

export function showError(message) {
  const errorEl = document.getElementById("error");
  const messageEl = document.getElementById("error-message");

  if (messageEl) {
    messageEl.textContent = message || "Something went wrong! Please try again";
  }
  if (errorEl) {
    errorEl.classList.remove("hidden");
  }
}
