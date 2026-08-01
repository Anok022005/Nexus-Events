/*=====================================
        CONTACT FORM - EMAILJS
======================================*/

const form = document.getElementById("contact-form");

if (form) {

    const button = form.querySelector('button[type="submit"]');

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        button.innerHTML = "Sending...";
        button.disabled = true;

        const templateParams = {

            from_name: document.getElementById("name").value,

            from_email: document.getElementById("email").value,

            phone: document.getElementById("phone").value,

            event_type: document.getElementById("event").value,

            message: document.getElementById("message").value

        };

        emailjs.send(
            "service_4gd0i4n",
            "template_gupaix9",
            templateParams
        )

        .then(function () {

            alert("✅ Inquiry sent successfully!");

            form.reset();

        })

        .catch(function (error) {

            console.error("EmailJS Error:", error);

            alert("❌ Failed to send inquiry. Please try again.");

        })

        .finally(function () {

            button.innerHTML = "Book a Free Consultation";

            button.disabled = false;

        });

    });

}