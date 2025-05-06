const body = document.body;
const toggleButton = document.getElementById('toggle-theme');

toggleButton.addEventListener('click', function() {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
});