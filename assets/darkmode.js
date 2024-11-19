const darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

const backgroundColorPicker = document.getElementById('background-color');
const headerColorPicker = document.getElementById('header-color');
const textColorPicker = document.getElementById('text-color');

const darkModeColors = {
    backgroundColor: "#000000",
    headerColor: "#9127a1",
    textColor: "#af99e2"
};

const lightModeColors = {
    backgroundColor: "#e2e2e2",
    headerColor: "#F09BFD",
    textColor: "#1F0067"
};

// Initialize colors in localStorage if not present
if (!localStorage.getItem('backgroundColor')) {
    localStorage.setItem('backgroundColor', lightModeColors.backgroundColor);
}
if (!localStorage.getItem('headerColor')) {
    localStorage.setItem('headerColor', lightModeColors.headerColor);
}
if (!localStorage.getItem('textColor')) {
    localStorage.setItem('textColor', lightModeColors.textColor);
}

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');

    backgroundColorPicker.value = darkModeColors.backgroundColor;
    headerColorPicker.value = darkModeColors.headerColor;
    textColorPicker.value = darkModeColors.textColor;

    document.body.style.backgroundColor = darkModeColors.backgroundColor;
    document.querySelector('header').style.backgroundColor = darkModeColors.headerColor;
    document.body.style.color = darkModeColors.textColor;
};

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.removeItem('darkmode');

    backgroundColorPicker.value = localStorage.getItem('backgroundColor');
    headerColorPicker.value = localStorage.getItem('headerColor');
    textColorPicker.value = localStorage.getItem('textColor');

    document.body.style.backgroundColor = localStorage.getItem('backgroundColor');
    document.querySelector('header').style.backgroundColor = localStorage.getItem('headerColor');
    document.body.style.color = localStorage.getItem('textColor');
};

if (darkmode === "active") enableDarkmode();
else disableDarkmode();

if (backgroundColorPicker) {
    backgroundColorPicker.addEventListener("input", (event) => {
        document.body.style.backgroundColor = event.target.value;
        localStorage.setItem('backgroundColor', event.target.value);
    });
}

if (headerColorPicker) {
    headerColorPicker.addEventListener("input", (event) => {
        const header = document.querySelector('header');
        header.style.backgroundColor = event.target.value;
        localStorage.setItem('headerColor', event.target.value);
    });
}

if (textColorPicker) {
    textColorPicker.addEventListener("input", (event) => {
        document.body.style.color = event.target.value;
        localStorage.setItem('textColor', event.target.value);
    });
}

if (themeSwitch) {
    themeSwitch.addEventListener("click", () => {
        const darkmode = localStorage.getItem('darkmode');
        if (darkmode !== "active") {
            enableDarkmode();
            themeSwitch.classList.add('dark');
        } else {
            disableDarkmode();
            themeSwitch.classList.remove('dark');
        }
    });
}

