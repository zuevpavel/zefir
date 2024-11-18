import ready from 'Utils/documentReady.js';

ready(function(){
    // hide / show password
    const showPassBtn = document.querySelectorAll('.js-show-icon');

    showPassBtn.forEach(function (trigger) {
        trigger.addEventListener('click', () => {
        const passwordInput = trigger.previousElementSibling;
        passwordInput.getAttribute('type') === 'password' ? passwordInput.setAttribute('type', 'text') : passwordInput.setAttribute('type', 'password');
        trigger.querySelector(".show-icon--line").classList.toggle("visually-hidden");
        });
    })
});
