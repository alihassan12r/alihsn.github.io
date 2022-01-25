import React from 'react';
import '../style/sass/pages/_options.scss';
import { mobileOnly } from '../utls/jsCommon';

const Options = function () {
  let optionButtons = null;
  let optionMenu = null;
  let btnDark = null;
  let transTimeout = null;
  let ahDocument = null;
  let isOpen = false;

  const openCloseOptionsMenu = () => {
    optionMenu.classList.toggle('option_menu--active');
    optionButtons.classList.toggle('options__btn--clicked');
    if (mobileOnly()) ahDocument.classList.toggle('html--noscroll');
    isOpen = !isOpen;
  };

  const setOnOptionsClick = () => {
    optionButtons.onclick = () => openCloseOptionsMenu();
  };

  const transitionForDocument = () => {
    document.documentElement.classList.add('transition');
    if (transTimeout != null) window.clearTimeout(transTimeout);
    transTimeout = window.setTimeout(() => {
      document.documentElement.classList.remove('transition');
    }, 1000);
  };

  const setDarkTheme = () => {
    transitionForDocument();
    document.documentElement.classList.toggle('dark');
  };

  const setOnDarkChange = () => {
    btnDark.onchange = () => setDarkTheme();
  };

  const initDarkThemeOnTime = (hIn24) => {
    if (hIn24 <= 4 || hIn24 >= 18) {
      setDarkTheme();
      btnDark.checked = true;
    }
  };

  React.useEffect(() => {
    optionButtons = document.getElementById('btn-show-option');
    optionMenu = document.querySelector('.option .option_menu');
    btnDark = document.getElementById('chk-dar');
    ahDocument = document.documentElement;
    setOnOptionsClick();
    setOnDarkChange();
  }, []);

  React.useEffect(() => {
    const hIn24 = new Date().getHours();
    initDarkThemeOnTime(hIn24);
  }, []);

  React.useEffect(() => {
    window.onresize = () => {
      if (mobileOnly() && isOpen) ahDocument.classList.add('ah-content--noscroll');
      else {
        ahDocument.classList.remove('ah-content--noscroll');
        if (isOpen) openCloseOptionsMenu();
      }
    };
  }, []);

  return (
    <div className="options-container">
      <div className="option">
        <button
          type="button"
          className="btn options__btn options__btn--show-option"
          id="btn-show-option"
        >
          <span />
        </button>
        <div className="option_menu">
          <div className="option_title">Dark mode</div>
          <div className="option_body">
            <input type="checkbox" className="checkbox-input" id="chk-dar" />
            {/* <!-- <button class="button options__btn btn--dark" id="btn-dark"></button> --> */}
            {/* <!-- <button class="button options__btn btn--light" id="btn-light"></button> --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;
