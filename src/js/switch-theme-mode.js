export function switchThemeMode() {
    const refs = {
        bodyEl: document.querySelector('body'),
        switchControlEl: document.querySelector(".theme-switch__control"),
        switchModeChbxEl: document.getElementById("theme-switch-toggle"),
    }

    const Theme = {
        LIGHT: 'light-theme',
        DARK: 'dark-theme',
    };
    
    const themeMode = getlocalStorageThemeMode('theme');

    setTheme(themeMode);

    refs.switchControlEl.addEventListener('change', onSwitchThemeChbxChange);
    
    function getlocalStorageThemeMode(key) {
        
        const themeMode = localStorage.getItem(key);

        if (themeMode === null) {
            return Theme.LIGHT;
        }

        return themeMode;
    }

    function setTheme(themeMode) {
        localStorage.setItem('theme', themeMode);
        refs.bodyEl.classList.add(themeMode);

        if (themeMode === Theme.LIGHT) {
            refs.switchModeChbxEl.checked = false;
            return;
        }

        refs.switchModeChbxEl.checked = true;
     }
        
    function changethemeMode(oldTheme, newTheme) {
        refs.bodyEl.classList.replace(oldTheme, newTheme);
        localStorage.setItem('theme', newTheme);
        console.log(newTheme);
    }

    function onSwitchThemeChbxChange(e) {
        if (e.target.checked) {
            changethemeMode(Theme.LIGHT, Theme.DARK);
        } else {
            changethemeMode(Theme.DARK, Theme.LIGHT);
        }
    }

}



