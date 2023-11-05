/* script.js */

// Function to show a confirmation message after form submission
function showConfirmation() {
    // Hide the form
    document.querySelector('form').style.display = 'none';

    // Display a confirmation message
    const confirmation = document.createElement('div');
    confirmation.className = 'confirmation';
    confirmation.innerHTML = '<p>Thank you for submitting your report. A reference number has been generated.</p>';
    document.body.appendChild(confirmation);
}

// Function to validate the form before submission (you can add more validation as needed)
function validateForm() {
    const consentCheckbox = document.getElementById('consent');

    if (!consentCheckbox.checked) {
        const error = document.createElement('div');
        error.className = 'error';
        error.innerHTML = 'You must consent to the use of this information for law enforcement purposes.';
        document.querySelector('form').appendChild(error);
        return false; // Prevent form submission
    }

    return true; // Allow form submission
}

// Attach the validation function to the form's onsubmit event
document.querySelector('form').onsubmit = validateForm;
