document.addEventListener("DOMContentLoaded", function () {
    // Initialize phone input
    const phoneInputField = document.querySelector("#college-phone");
    const phoneInput = window.intlTelInput(phoneInputField, {
        initialCountry: "in",
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });

    const repPhoneInputField = document.querySelector("#phone");
    const repPhoneInput = window.intlTelInput(repPhoneInputField,{
        initialCountry: "in",
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });

    // Form validation
    const forms = document.querySelectorAll(".needs-validation");
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener("submit", function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add("was-validated");
        }, false);
    });

    // Enable carousel auto-sliding
    const carousel = document.querySelector('#carouselExampleIndicators');
    const carouselInstance = new bootstrap.Carousel(carousel, {
        interval: 3000, // Change the value to adjust the interval (milliseconds)
    });

});
