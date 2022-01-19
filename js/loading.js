/* ----------------------------------------------- */
/* ----------------------AH----------------------- */
/* ---------------2021 © Ali Hassan--------------- */
/* ----------------------------------------------- */

var loading = (() => {

    /* ----------------------------------------------- */
    /* --------------------main variables------------- */
    /* ----------------------------------------------- */

    let loadingElement = null,
        loadingClassName = "loading",
        loadingClose = "loading--close",
        loadingHide = "loading--hide";

    /* ----------------------------------------------- */
    /* -------------------init loading---------------- */
    /* ----------------------------------------------- */

    init = () => {
        createLoadingElement();
    }

    /* ----------------------------------------------- */
    /* ----------------------loading------------------ */
    /* ----------------------------------------------- */

    showLoading = () => {
        insertLoadingElement();
        let classes = loadingElement.classList;
        if (classes.contains(loadingClose)) classes.remove(loadingClose);
        if (classes.contains(loadingHide)) classes.remove(loadingHide);
    }

    closeLoading = () => {
        loadingElement.classList.add(loadingClose);
        setTimeout(() => { removeLoadingElement(); }, 2000);
    }

    createLoadingElement = () => {
        loadingElement = document.createElement('div');
        loadingElement.setAttribute("class", loadingClassName);
        loadingElement.innerHTML = "<span></span>";
    }

    insertLoadingElement = () => {
        let beforeElement = document.body.firstChild;
        document.body.insertBefore(loadingElement, beforeElement);
    }

    removeLoadingElement = () => {
        document.body.removeChild(loadingElement);
    }

    /* ----------------------------------------------- */
    /* ----------------------body--------------------- */
    /* ----------------------------------------------- */

    showBody = () => {
        let bodyCnt = document.querySelector(".body-content");
        bodyCnt.classList.remove("non-visible");
    }

    /* ----------------------------------------------- */
    /* --------------return used function------------- */
    /* ----------------------------------------------- */

    return {
        init,
        showLoading,
        closeLoading,
        showBody
    }

})();
/* ----------------------------------------------- */
/* ----------------------AH----------------------- */
/* ---------------2021 © Ali Hassan--------------- */
/* ----------------------------------------------- */

