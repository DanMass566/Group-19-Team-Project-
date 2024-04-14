document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("demoForm");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form submission

            var formData = {
                "fname": document.getElementById("fname").value,
                "email": document.getElementById("email").value,
                "adr": document.getElementById("adr").value,
                "city": document.getElementById("city").value,
                "county": document.getElementById("county").value,
                "eircode": document.getElementById("eircode").value,
                "datePicker": document.getElementById("datePicker").value
            };

            localStorage.setItem("formData", JSON.stringify(formData));
            window.location.href = "bookSubmission.html";
        });
    }
});
