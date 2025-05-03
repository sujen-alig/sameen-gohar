// register.js

document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const newPassword = document.getElementById("new-password").value;

    if (newPassword) {
        // Save password to localStorage
        localStorage.setItem("userPassword", newPassword);
        alert("Registration successful! You can now log in.");
        window.location.href = "login.html";  // Redirect to login page
    } else {
        // Display error if password is not provided
        document.getElementById("error-message").style.display = "block";
    }
});
