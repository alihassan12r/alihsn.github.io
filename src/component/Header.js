import '../style/sass/pages/_header.scss';

import React from 'react';
import Options from './Options';

const Header = function () {
  let currentActiveTagElement = null;
  const navbarATag = '.navbar__menu .navbar__items .navbar__item button';
  const activeLiClassName = 'navbar__item--active';

  const setNavItemHeroSlider = () => {
    const left = currentActiveTagElement.offsetLeft;
    const width = currentActiveTagElement.offsetWidth - 4;
    const slider = document.querySelector('.navbar .navbar__hero-slider');
    Object.assign(slider.style, { left: `${left}px`, width: `${width}px` });
  };

  const switchActive = (element, activeClass) => {
    const removeActiveClass = (elem) => elem.classList.remove(activeClass);
    document.querySelectorAll(`.${activeClass}`).forEach(removeActiveClass);
    element.classList.add(activeClass);
  };

  const setTabActive = () => {
    const currentTag = currentActiveTagElement;
    const liElement = currentTag.parentElement;
    const gotToTabId = `#${currentTag.getAttribute('go-id')}`;
    const tabActiveClassName = 'tab--active';
    if (liElement.classList.contains(activeLiClassName)) {
      switchActive(document.querySelector(gotToTabId), tabActiveClassName);
    }
  };

  const setNavItemActive = () => {
    const currentTag = currentActiveTagElement;
    const liElement = currentTag.parentElement;
    if (!liElement.classList.contains(activeLiClassName)) {
      switchActive(liElement, activeLiClassName);
    }
  };

  const setNav = () => {
    setNavItemHeroSlider();
    setNavItemActive();
    setTabActive();
  };

  const initTabAndNavThatIsActive = () => {
    const activeNavbar = document.querySelector(`.${activeLiClassName}`);
    const currentTag = activeNavbar && activeNavbar.querySelector('button');
    if (!currentTag) return;
    currentActiveTagElement = currentTag;
    setNav();
  };

  const onNavClick = (_, $clickedElement) => {
    currentActiveTagElement = $clickedElement;
    setNav();
  };

  const setNavbarsOnClick = () => {
    const navbarATagElements = document.querySelectorAll(navbarATag);
    navbarATagElements.forEach((navbarItem) => {
      const theNavbarItem = navbarItem;
      theNavbarItem.onclick = (event) => onNavClick(event, event.currentTarget);
    });
  };

  React.useEffect(() => {
    initTabAndNavThatIsActive();
    setNavbarsOnClick();
    // onresize = () => setNavItemHeroSlider();
  }, []);

  return (
    <header>
      <div className="navbar">
        <div className="container">
          <div className="navbar__img" />
          <div className="navbar__logo">
            <h2>Ali Hassan</h2>
            <p>Web Developer 😙</p>
            <a title="twitter" target="_blank" rel="noreferrer" href="http://twitter.com/alihsn12r">
              @alihsn12r
            </a>
          </div>
          <div className="navbar__menu">
            <ul className="navbar__items">
              <li className="navbar__item navbar__item--active">
                <button className="btn btn--link" type="button" go-id="tab__aboutme">
                  <b>About</b>🤓
                </button>
              </li>
              <li className="navbar__item">
                <button className="btn btn--link" type="button" go-id="tab__contact">
                  <b>Contact</b>🙋‍♂️
                </button>
              </li>
            </ul>
            <span className="navbar__hero-slider" />
          </div>
          <div className="navbar__options">
            <Options />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
