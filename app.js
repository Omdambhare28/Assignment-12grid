document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Validate form fields
        const nameInput = document.getElementsByName('name')[0];
        const orgNameInput = document.getElementsByName('organisation name')[0];
        const contactInput = document.getElementsByName('Contact number')[0];
        const emailInput = document.getElementsByName('email')[0];
        let isValid = true;

        if (nameInput.value.trim() === '') {
            showError(nameInput, 'Name is required');
            isValid = false;
        } else {
            hideError(nameInput);
        }

        if (orgNameInput.value.trim() === '') {
            showError(orgNameInput, 'Organisation Name is required');
            isValid = false;
        } else {
            hideError(orgNameInput);
        }

        if (contactInput.value.trim() === '' || isNaN(contactInput.value.trim())) {
            showError(contactInput, 'Valid Contact Number is required');
            isValid = false;
        } else {
            hideError(contactInput);
        }

        if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value.trim())) {
            showError(emailInput, 'Valid email is required');
            isValid = false;
        } else {
            hideError(emailInput);
        }

        // If all fields are valid, show success message
        if (isValid) {
            showSuccessMessage();
            form.reset(); // Clear form fields
            setTimeout(function () {
                successMessage.style.display = 'none'; // Hide success message after 5 seconds
            }, 5000);
        }
    });

    function showError(input, message) {
        const errorElement = input.nextElementSibling; // Assuming error message follows the input
        errorElement.innerText = message;
        errorElement.style.display = 'block';
    }

    function hideError(input) {
        const errorElement = input.nextElementSibling; // Assuming error message follows the input
        errorElement.innerText = '';
        errorElement.style.display = 'none';
    }

    function showSuccessMessage() {
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
    }

    function isValidEmail(email) {
        // Basic email validation regex
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    }
});
