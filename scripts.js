const darkModeToggle = document.getElementById('theme-toggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');



    if (document.body.classList.contains("dark-mode")) {
        // Setting new values for the CSS variables
        document.documentElement.style.setProperty('--background', '#0d1117');
        document.documentElement.style.setProperty('--secondary-background', '#161b22');
        document.documentElement.style.setProperty('--tertiary-background', '#1f2933');
        document.documentElement.style.setProperty('--primary-color', '#ffffff');
        document.documentElement.style.setProperty('--accent-color', '#00ffc6');
        document.documentElement.style.setProperty('--text-color', '#c9d1d9');
        document.documentElement.style.setProperty('--secondary-text-color', '#8b949e');
        document.documentElement.style.setProperty('--btn-bg', '#21262d');
        document.documentElement.style.setProperty('--btn-text', '#00ffc6');
        darkModeToggle.innerHTML = '<i class="fa-regular fa-sun"></i>';
    } else {
        // Resetting to original values
        document.documentElement.style.setProperty('--background', '#ffffff');
        document.documentElement.style.setProperty('--secondary-background', '#f0f0f0');
        document.documentElement.style.setProperty('--tertiary-background', '#2c3e50');
        document.documentElement.style.setProperty('--primary-color', '#2c3e50');
        document.documentElement.style.setProperty('--accent-color', '#1abc9c');
        document.documentElement.style.setProperty('--text-color', '#333333');
        document.documentElement.style.setProperty('--secondary-text-color', '#7f8c8d');
        document.documentElement.style.setProperty('--btn-bg', '#1abc9c');
        document.documentElement.style.setProperty('--btn-text', 'white');

        darkModeToggle.innerHTML = '<i class="fa-regular fa-moon"></i>';
    }

});