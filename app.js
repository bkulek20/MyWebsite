const body = document.body;
const toggleButton = document.getElementById('toggle-theme');

body.classList.add('light-mode');

toggleButton.addEventListener('click', function() {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        console.log("light mode a geçildi")
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        console.log("dark mode a geçildi")

    }

});