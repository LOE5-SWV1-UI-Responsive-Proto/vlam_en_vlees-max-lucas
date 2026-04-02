document.addEventListener("DOMContentLoaded", function () {

  const button = document.getElementById("darkModeButton");

  button.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });

});