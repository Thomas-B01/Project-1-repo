let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

// Color picker elements
const backgroundColorPicker = document.getElementById('background-color');
const headerColorPicker = document.getElementById('header-color');
const textColorPicker = document.getElementById('text-color');

// Dark mode color settings
const darkModeColors = {
    backgroundColor: "#000000",
    headerColor: "#9127a1",
    textColor: "#af99e2"
};

// Light mode color settings
const lightModeColors = {
    backgroundColor: "#e2e2e2",
    headerColor: "#F09BFD",
    textColor: "#1F0067"
};

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');

    // Set dark mode colors for pickers
    backgroundColorPicker.value = darkModeColors.backgroundColor;
    headerColorPicker.value = darkModeColors.headerColor;
    textColorPicker.value = darkModeColors.textColor;

    // Apply dark mode colors
    document.body.style.backgroundColor = darkModeColors.backgroundColor;
    document.querySelector('header').style.backgroundColor = darkModeColors.headerColor;
    document.body.style.color = darkModeColors.textColor;
};

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);

    // Set light mode colors for pickers
    backgroundColorPicker.value = lightModeColors.backgroundColor;
    headerColorPicker.value = lightModeColors.headerColor;
    textColorPicker.value = lightModeColors.textColor;

    // Apply light mode colors
    document.body.style.backgroundColor = lightModeColors.backgroundColor;
    document.querySelector('header').style.backgroundColor = lightModeColors.headerColor;
    document.body.style.color = lightModeColors.textColor;
};

// Toggle dark mode based on localStorage
if (darkmode === "active") enableDarkmode();

// Get colors from localStorage
const savedBackgroundColor = localStorage.getItem('backgroundColor');
const savedHeaderColor = localStorage.getItem('headerColor');
const savedTextColor = localStorage.getItem('textColor');

// Set colors from localStorage on page load
if (savedBackgroundColor) {
    document.body.style.backgroundColor = savedBackgroundColor;
    backgroundColorPicker.value = savedBackgroundColor; // Update the color picker
}

localStorage.setItem('backgroundColor', darkModeColors.backgroundColor);
localStorage.setItem('headerColor', darkModeColors.headerColor);
localStorage.setItem('textColor', darkModeColors.textColor);

if (savedHeaderColor) {
    const header = document.querySelector('header');
    header.style.backgroundColor = savedHeaderColor;
    headerColorPicker.value = savedHeaderColor; // Update the color picker
}

if (savedTextColor) {
    document.body.style.color = savedTextColor;
    textColorPicker.value = savedTextColor; // Update the color picker
}

// Function to update the background color
backgroundColorPicker.addEventListener("input", (event) => {
    document.body.style.backgroundColor = event.target.value;
    localStorage.setItem('backgroundColor', event.target.value); // Save color in localStorage
});

// Function to update the header color
headerColorPicker.addEventListener("input", (event) => {
    const header = document.querySelector('header');
    header.style.backgroundColor = event.target.value;
    localStorage.setItem('headerColor', event.target.value); // Save color in localStorage
});

// Function to update the text color
textColorPicker.addEventListener("input", (event) => {
    document.body.style.color = event.target.value;
    localStorage.setItem('textColor', event.target.value); // Save color in localStorage
});

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    if (darkmode !== "active") {
        enableDarkmode();
        themeSwitch.querySelector("svg:first-child").style.display = "none";
        themeSwitch.querySelector("svg:last-child").style.display = "block";
    } else {
        disableDarkmode();
        themeSwitch.querySelector("svg:first-child").style.display = "block";
        themeSwitch.querySelector("svg:last-child").style.display = "none";
    }
});

