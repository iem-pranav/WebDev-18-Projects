window.addEventListener("DOMContentLoaded", () => {
  // Initialize theme switcher UI
  themesSwitcher.initThemeSwitcher();

  const keys = Array.from(document.querySelectorAll(".key"));

  // Play sound on drum button click (mouse)
  keys.forEach((button) => {
    button.addEventListener("click", () => {
      const keyCode = button.getAttribute("data-key");
      const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
      if (!audio) return;
      audio.currentTime = 0;
      audio.play();
      animateKey(button);
    });
  });

  // Play sound on keyboard press
  window.addEventListener("keydown", (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio || !key) return;
    audio.currentTime = 0;
    audio.play();
    animateKey(key);
  });

  // Remove animation after transition
  keys.forEach((key) => {
    key.addEventListener("transitionend", (e) => {
      if (e.propertyName !== "transform") return;
      key.classList.remove("playing");
    });
  });

  // Keyboard keyup to remove playing classes if needed
  window.addEventListener("keyup", () => {
    keys.forEach((key) => key.classList.remove("playing"));
  });

  function animateKey(key) {
    if (!key) return;
    key.classList.add("playing");
    setTimeout(() => {
      key.classList.remove("playing");
    }, 150); // remove after 150ms to match CSS transition
  }
});
