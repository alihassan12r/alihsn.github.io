/* ----------------------------------------------- */
/* ----------------------AH----------------------- */
/* ---------------2021 © Ali Hassan--------------- */
/* ----------------------------------------------- */
var stickyNavigation = (function () {


    /* ----------------------------------------------- */
    /* --------------------main variables------------- */
    /* ----------------------------------------------- */

    let currentATagElement = null,
        navbarATag = '.navbar__menu .navbar__items .navbar__item a',
        activeLiClassName = 'navbar__item--active';

    /* ----------------------------------------------- */
    /* ------------init sticky navigation------------- */
    /* ----------------------------------------------- */

    init = () => {
        initTabAndNavThatIsActive();
        setNavbarsOnClick();
        onresize = () => { setNavItemHeroSlider(); };
    }

    /* ----------------------------------------------- */
    /* ---------------sticky navigation--------------- */
    /* ----------------------------------------------- */

    // ------------------------
    // init which nav is active
    // ------------------------
    initTabAndNavThatIsActive = () => {
        let activeNavbar = document.querySelector(`.${activeLiClassName}`);
        let aTag = activeNavbar && activeNavbar.querySelector('a');
        aTag && (currentATagElement = aTag) && setNav();
    }

    // ------------------------
    // on nav bar click
    // ------------------------
    setNavbarsOnClick = () => {
        const navbarATagElements = document.querySelectorAll(navbarATag);
        navbarATagElements.forEach(navbarItem => {
            navbarItem.onclick = (event) => onNavClick(event, event.target);
        });
    }

    onNavClick = (event, aTagElement) => {
        currentATagElement = aTagElement;
        setNav();
    }

    setNav = () => {
        setNavItemHeroSlider();
        setNavItemActive();
        setTabActive();
    }

    setNavItemHeroSlider = () => {
        let left = currentATagElement.offsetLeft,
            width = currentATagElement.offsetWidth - 4,
            slider = document.querySelector(".navbar .navbar__hero-slider");
        Object.assign(slider.style, { left: `${left}px`, width: `${width}px` });
    }

    setNavItemActive = () => {
        let aTag = currentATagElement;
        let liElement = aTag.parentElement;
        !liElement.classList.contains(activeLiClassName) && switchActive(liElement, activeLiClassName);
    }

    /* ----------------------------------------------- */
    /* -------------------tabs------------------------ */
    /* ----------------------------------------------- */

    setTabActive = () => {
        let aTag = currentATagElement;
        let liElement = aTag.parentElement;
        let gotToTabId = `#${aTag.getAttribute("go-id")}`;
        let tabActiveClassName = 'tab--active';
        liElement.classList.contains(activeLiClassName) && switchActive(document.querySelector(gotToTabId), tabActiveClassName);
    }

    /* ----------------------------------------------- */
    /* -------------------helper---------------------- */
    /* ----------------------------------------------- */

    switchActive = (element, activeClass) => {
        document.querySelectorAll('.' + activeClass).forEach(elem => {
            elem.classList.remove(activeClass);
        });
        element.classList.add(activeClass);
    }

    /* ----------------------------------------------- */
    /* --------------return used function------------- */
    /* ----------------------------------------------- */

    return {
        init
    }
    
})();

/* ----------------------------------------------- */
/* ----------------------AH----------------------- */
/* ---------------2021 © Ali Hassan--------------- */
/* ----------------------------------------------- */