window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  // console.log(key)
  // console.log(e)

  function removeTransitioon(e) {
    if (e.propertyName !== "transform") return;
    // console.log(e.propertyName);
    this.classList.remove("playing");
  }

  key.classList.add("playing");
  const keys = document.querySelectorAll(".key");
  keys.forEach((key) =>
    key.addEventListener("transitionend", removeTransitioon)
  );
});
