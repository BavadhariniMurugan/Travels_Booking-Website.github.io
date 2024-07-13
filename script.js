// scripts.js

function validateForm() {
    var firstName = document.getElementById("fname").value;
    var email = document.getElementById("Email").value;
    var country = document.getElementById("country").value;
    var subject = document.getElementById("subject").value;

    if (firstName == "") {
        alert("First Name must be filled out");
        return false;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    if (country == "") {
        alert("Please select a country");
        return false;
    }

    if (subject == "") {
        alert("Please enter a question");
        return false;
    }

    return true;
}
