// login.js

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const enteredPassword = document.getElementById("password").value;
    const storedPassword = localStorage.getItem("userPassword");

    if (enteredPassword === storedPassword) {
        // Correct password, allow access to the app
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "index.html";  // Redirect to the main page
    } else {
        // Incorrect password
        document.getElementById("error-message").style.display = "block";
    }
});
