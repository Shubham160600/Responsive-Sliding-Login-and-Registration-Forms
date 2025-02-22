const container = document.querySelector('.container');
const registerLink = document.getElementById('register-link');
const loginLink = document.getElementById('login-link');

registerLink.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.remove('register-active'); // Changed
});

loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.add('register-active'); // Changed
});
