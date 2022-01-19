/* ----------------------------------------------- */
/* ----------------------AH----------------------- */
/* ---------------2021 © Ali Hassan--------------- */
/* ----------------------------------------------- */

/* ----------------------------------------------- */
/* -----------------global vars------------------- */
/* ----------------------------------------------- */

/* ----------------------------------------------- */
/* ---------------application--------------------- */
/* ----------------------------------------------- */

let application = {
    start() {
        try {
            // open loading
            loading.init();
            loading.showLoading();
        } catch (error) {
            this.onError(error);
        }
    },
    run() {
        try {
            // init nav
            stickyNavigation.init();
            // show body 
            loading.showBody();
            // loading close after load page
            setTimeout(() => { loading.closeLoading(); }, 500);
        } catch (error) {
            this.onError(error);
        }
    },
    onError(error) {
        document.write("<h1>AH</h1><h2>Your Browser not supported</h2>");
    }
}

/* ----------------------------------------------- */
/* ---------------readystatechange---------------- */
/* ----------------------------------------------- */

// readyState from  developer mozilla
// https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState
// readystatechange as an alternative to DOMContentLoaded event when is loading
// readystatechange as an alternative to load event when is loaded
// readystatechange as event listener to insert or modify the DOM before DOMContentLoaded

// load event from  developer mozilla
// https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

document.addEventListener('readystatechange', (event) => {
    switch (document.readyState) {
        // ------------------------------------------------------------
        // The document is still loading.
        case "loading": break;
        // ------------------------------------------------------------
        // ------------------------------------------------------------
        // The document has finished loading. We can now access the DOM elements.
        // The document has been parsed but sub-resources such as scripts, images, stylesheets and frames are still loading.
        case "interactive": application.start(); break;
        // ------------------------------------------------------------
        // ------------------------------------------------------------
        // The page is fully loaded.
        // The document and all sub-resources have finished loading. The state indicates that the load event is about to fire.
        case "complete": application.run(); break;
        // ------------------------------------------------------------
    }
});


/* ----------------------------------------------- */
/* ----------------------AH----------------------- */
/* ---------------2021 © Ali Hassan--------------- */
/* ----------------------------------------------- */