// mission.js

const themeSelector = document.querySelector('#theme-selector');

function changeTheme() {
    const body = document.body;
    const logo = document.querySelector('footer .logo');

    if (themeSelector.value === 'dark') {
        body.classList.add('dark');
        if (logo) {
            logo.src = 'images/byui-logo_white.png'; // Path to the white logo for dark theme
        }
    } else {
        body.classList.remove('dark');
        if (logo) {
            logo.src = 'images/byui-logo_blue (1).png'; // Path to the blue logo for light theme
        }
    }
}

themeSelector.addEventListener('change', changeTheme);