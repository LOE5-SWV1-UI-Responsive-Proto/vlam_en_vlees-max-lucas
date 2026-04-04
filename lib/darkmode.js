document.addEventListener("DOMContentLoaded", function () {

  const button = document.getElementById("darkModeButton");

  button.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });

});

const increaseText = document.getElementById("increaseText");
const normalText = document.getElementById("normalText");

increaseText.addEventListener("click", function () {
  document.body.classList.add("large-text");
});

normalText.addEventListener("click", function () {
  document.body.classList.remove("large-text");
});

const contrastButton = document.getElementById("contrastMode");

contrastButton.addEventListener("click", function () {
  document.body.classList.toggle("high-contrast");
});

const languageSwitch = document.getElementById("languageSwitch");

let english = false;

languageSwitch.addEventListener("click", function () {

  english = !english;

  const elements = document.querySelectorAll("[data-nl]");

  elements.forEach(function(el) {

    if (english) {
      el.textContent = el.dataset.en;
    } else {
      el.textContent = el.dataset.nl;
    }

  });

});