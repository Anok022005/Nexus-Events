const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const button = document.querySelector(".contact-btn");

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

  .catch(function(error){

    console.error(error);

    alert(error.text || JSON.stringify(error));

})

    .finally(function () {

        button.innerHTML = "Send Inquiry →";

        button.disabled = false;

    });

});