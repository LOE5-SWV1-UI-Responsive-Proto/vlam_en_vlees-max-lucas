// Wacht tot de pagina volledig geladen is
document.addEventListener("DOMContentLoaded", function () {

    // Zoek de knop met id "darkModeButton"
    let knop = document.getElementById("darkModeButton");

    // Wanneer er op de knop geklikt wordt
    knop.addEventListener("click", function () {

        // Zet de class dark-mode aan of uit op de body
        document.body.classList.toggle("dark-mode");

    });

});