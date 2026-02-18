document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {

        event.preventDefault(); 

        const name = form.querySelector("input[name='name']").value.trim();
        const email = form.querySelector("input[name='email']").value.trim();
        const message = form.querySelector("textarea[name='message']").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Thank you, " + name + "! Your message has been sent successfully.");

        form.reset();
    });

});