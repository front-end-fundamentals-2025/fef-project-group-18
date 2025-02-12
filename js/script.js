// Password toggle functionality
const passwordField = document.getElementById('password');
const togglePassword = document.querySelector('.input-group span.icon');

if (togglePassword) {
    togglePassword.addEventListener('click', () => {
        passwordField.type = passwordField.type === 'password' ? 'text' : 'password';
    });
}