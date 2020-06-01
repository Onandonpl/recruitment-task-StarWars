const audio = new Audio("/imperial_march.mp3");
window.onload = function () {
  const form = document.getElementsByTagName("form")[0];
  form.addEventListener("submit", logSubmit);
};

function logSubmit(e) {
  const characters = document.querySelectorAll('[name="character"]:checked');
  const light = document.querySelectorAll('[value="light_side"]:checked');
  if (light.length == 1 || characters.length == 3 || characters.length == 0) {
  } else {
    audio.play();
    e.preventDefault();
  }
}
