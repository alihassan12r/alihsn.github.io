// style
import './style/sass/index.scss';

// script
import ReactDOM from 'react-dom';
import App from './App';
import { documentReady } from './utls/jsCommon';
import { changeThemeOnTime } from './utls/theme';
import { closePlaceholder, removePlaceholder } from './utls/placeholder';

const initAH = async function () {
  await documentReady();
  changeThemeOnTime();
  // return on loaded react
  return async () => {
    await closePlaceholder();
    removePlaceholder();
  };
};

const renderReactDOM = (onLoaded) => {
  ReactDOM.render(<App onLoaded={onLoaded} />, document.getElementById('ah-root'));
};

initAH().then((onLoadedReact) => renderReactDOM(onLoadedReact));
