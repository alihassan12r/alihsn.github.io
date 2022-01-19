/* ----------------------------------------------- */
/* ----------------------AH----------------------- */
/* ---------------2021 © Ali Hassan--------------- */
/* ----------------------------------------------- */
var options = (function () {

    /* ----------------------------------------------- */
    /* --------------------main variables------------- */
    /* ----------------------------------------------- */

    let optionButtons = null,
        optionMenu = null,
        btnDark = null,
        transTimeout = null;

    /* ----------------------------------------------- */
    /* ----------------------init options------------- */
    /* ----------------------------------------------- */

    init = () => {
        optionButtons = document.getElementById('btn-show-option');
        optionMenu = document.querySelector('.option .option_menu');
        btnDark = document.getElementById('chk-dar');
        setOnOptionsClick();
        setOnDarkChange();
    }

    /* ----------------------------------------------- */
    /* ----------------------menu--------------------- */
    /* ----------------------------------------------- */

    setOnOptionsClick = () => {
        optionButtons.onclick = () => openCloseOptionsMenu();
    }

    openCloseOptionsMenu = () => {
        optionMenu.classList.toggle('option_menu--active');
        optionButtons.classList.toggle('btn--show-option--clicked');
    }

    /* ----------------------------------------------- */
    /* ----------------------mark theme--------------- */
    /* ----------------------------------------------- */

    setOnDarkChange = () => {
        btnDark.onchange = () => setDarkTheme();
    }

    initDarkThemeOnTime = () => {
        const hIn24 = new Date().getHours();
        if (hIn24 <= 6 || hIn24 >= 18) {
            setDarkTheme();
            btnDark.checked = true;
        }
    }

    setDarkTheme = () => {
        transitionForDocument();
        document.documentElement.classList.toggle('dark');
    }

    transitionForDocument = () => {
        document.documentElement.classList.add('transition');
        if (transTimeout != null) window.clearTimeout(transTimeout);
        transTimeout = window.setTimeout(() => {
            document.documentElement.classList.remove('transition');
        }, 1000);
    }

    /* ----------------------------------------------- */
    /* --------------return used function------------- */
    /* ----------------------------------------------- */

    return {
        init,
        initDarkThemeOnTime
    }

})();
/* ----------------------------------------------- */
/* ----------------------AH----------------------- */
/* ---------------2021 © Ali Hassan--------------- */
/* ----------------------------------------------- */