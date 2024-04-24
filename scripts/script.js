const passwordField = document.querySelector("#password");
const confirmField = document.querySelector("#re-password");
const errorContainer = document.querySelector(".error-container")

confirmField.addEventListener("input", matchPasswordsHandler);
passwordField.addEventListener("input", matchPasswordsHandler);

function matchPasswordsHandler() {
    if (passwordField.value === confirmField.value) {
        confirmField.classList.remove("invalid");
        passwordField.classList.remove("invalid");
        errorContainer.classList.remove("invalid");
    } else {
        confirmField.classList.add("invalid");
        passwordField.classList.add("invalid");
        errorContainer.classList.add("invalid");
    }
}