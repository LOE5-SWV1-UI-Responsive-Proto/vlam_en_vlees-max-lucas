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

  if (english) {
    document.querySelector(".section-title").textContent = "Flame & Meat";
    document.querySelector(".cat-title").textContent = "Categories";
  } else {
    document.querySelector(".section-title").textContent = "Vlam & Vlees";
    document.querySelector(".cat-title").textContent = "Categorieën";
  }

});