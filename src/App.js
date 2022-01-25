import React from 'react';
import './style/App.scss';

import Content from './component/content';
import Footer from './component/Footer';
import Header from './component/Header';
import LoadingProvider, { LoadingContext } from './context/Loading.context';
import useIsReady from './utls/hooks/useIsReady';

const App = function () {
  const isReady = useIsReady();
  const { showLoading } = React.useContext(LoadingContext);
  const closeLoading = () => isReady && showLoading(false);
  React.useEffect(closeLoading, [isReady]);

  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
};

const AppWithContext = function () {
  return (
    <LoadingProvider>
      <App />
    </LoadingProvider>
  );
};

export default AppWithContext;
