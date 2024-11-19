let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

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

// Function to enable dark mode
const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active'); // Immediately save dark mode state

    // Apply dark mode colors
    document.body.style.backgroundColor = darkModeColors.backgroundColor;
    document.querySelector('header').style.backgroundColor = darkModeColors.headerColor;
    document.body.style.color = darkModeColors.textColor;
};

// Function to disable dark mode
const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', 'null'); // Immediately save light mode state

    // Apply light mode colors
    document.body.style.backgroundColor = lightModeColors.backgroundColor;
    document.querySelector('header').style.backgroundColor = lightModeColors.headerColor;
    document.body.style.color = lightModeColors.textColor;
};

// Check for dark mode state in localStorage on initial load
if (darkmode === "active") {
    enableDarkmode();
} else {
    disableDarkmode();
}

// Toggle dark mode based on button click
themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    if (darkmode !== "active") {
        enableDarkmode(); // Activate dark mode
        themeSwitch.querySelector("svg:first-child").style.display = "none";
        themeSwitch.querySelector("svg:last-child").style.display = "block";
    } else {
        disableDarkmode(); // Deactivate dark mode
        themeSwitch.querySelector("svg:first-child").style.display = "block";
        themeSwitch.querySelector("svg:last-child").style.display = "none";
    }
});
