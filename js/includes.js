// This script loads the navbar and footer HTML into the main page

document.addEventListener("DOMContentLoaded", function() {
    fetch("/hd-513026-grupo4-apf3/partials/navbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;
    })
    .catch(error => console.error("Error loading navbar:", error));
});

// Load the footer after the navbar to ensure both are loaded correctly

document.addEventListener("DOMContentLoaded", function() {
    fetch("/hd-513026-grupo4-apf3/partials/footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    })
    .catch(error => console.error("Error loading footer:", error));
});