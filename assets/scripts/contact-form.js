const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', function (e) {
     e.preventDefault();
    let isValid = true;
 
    const name = document.getElementById('name');
    const nameError = document.getElementById('name-error');
    if (name.value.trim() === '') {
        nameError.textContent = 'Please enter your name.';
        isValid = false;
    } else if (name.value.trim().length < 2 || name.value.trim().length > 30) {
        nameError.textContent = 'Name must be between 2 and 30 characters.';
        isValid = false;
    } else {
        nameError.textContent = '';
    }
 
    const email = document.getElementById('email-input');
    const emailError = document.getElementById('email-error');
 
    if (email.value.trim() === '') {
        emailError.textContent = 'Please enter your email address.';
        isValid = false;
    } else if (!email.value.includes('@')) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }
 
    const reasonChecked = document.querySelector('input[name="reason"]:checked');
    const reasonError = document.getElementById('reason-error');
    if (!reasonChecked) {
        reasonError.textContent = 'Please select a reason for the contact.';
        isValid = false;
    } else {
        reasonError.textContent = '';
    }
 
    const message = document.getElementById('message');
    const messageError = document.getElementById('message-error');
    if (message.value.trim() === '') {
        messageError.textContent = 'Please enter a message.';
        isValid = false;
    } else if (message.value.trim().length < 10 || message.value.trim().length > 500) {
        messageError.textContent = 'Message must be between 10 and 500 characters.';
        isValid = false;
    } else {
        messageError.textContent = '';
    }
 
    if (isValid) {
        status.textContent = 'Thanks for the message, it has been submitted.';
        form.reset();
    } else {
        status.textContent = 'Please fix the errors above and try again.';
    }
});