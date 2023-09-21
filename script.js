const form = document.getElementById("password-form");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");

const validPassword = "Password"; // Replace with your desired password

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const enteredPassword = passwordInput.value;

    if (enteredPassword === validPassword) {
        window.location.href = "protected-page.html"; // Redirect to the protected page
    } else {
        message.textContent = "Incorrect password. Please try again.";
    }
});
