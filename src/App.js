import './style/App.scss';
import './style/sass/pages/_placeholder.scss';

import React from 'react';
import Content from './component/content';
import Footer from './component/Footer';
import Header from './component/Header';

const App = function (props) {
  const { onLoaded } = props;
  React.useEffect(onLoaded, []);

  return (
    <div className="ah-content">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
