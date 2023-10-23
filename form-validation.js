document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("myForm").addEventListener("submit", function (event) {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");

    emailError.innerHTML = "";
    passwordError.innerHTML = "";

    if (email === "") {
      emailError.innerHTML = "Email is required";
      alert("Email is required");
      event.preventDefault();
    } else if (!isValidEmail(email)) {
      emailError.innerHTML = "Invalid email address";
      alert("Invalid email address");
      event.preventDefault();
    }

    if (password === "") {
      passwordError.innerHTML = "Password is required";
      alert("Password is required");
      event.preventDefault();
    } else if (password.length < 8) {
      passwordError.innerHTML = "Password must be at least 8 characters long";
      alert("Password must be at least 8 characters long");
      event.preventDefault();
    }
  });

  function isValidEmail(email) {
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }
});
