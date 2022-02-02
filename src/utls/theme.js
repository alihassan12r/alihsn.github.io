import { transitionForDocument } from './jsCommon';

export const setDarkTheme = () => {
  transitionForDocument();
  document.documentElement.classList.toggle('dark');
};

export const isDarkTheme = (hIn24 = new Date().getHours()) => hIn24 <= 4 || hIn24 >= 18;

export const changeThemeOnTime = () => isDarkTheme() && setDarkTheme();
