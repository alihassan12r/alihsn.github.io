/* eslint-disable no-param-reassign */
import React from 'react';
import Loading from '../component/Loading';

const initLoadingState = true;

export const LoadingContext = React.createContext(initLoadingState);

const LoadingComponent = function (isLoading, ref) {
  return isLoading ? <Loading refObj={ref} /> : null;
};

const LoadingProvider = function (props) {
  const { children } = props;
  const [isLoading, setIsLoading] = React.useState(initLoadingState);
  const loadingRef = React.useRef(null);
  const ahContentContainerRef = React.useRef(null);

  // annotation
  React.useEffect(() => {
    const annotationDely = 2 * 1000;
    // add annotation to html document
    const { current: ahContentEle } = ahContentContainerRef;
    const ahContentClssAnnotation = 'ah-content--loading';
    const ahContentClss = ahContentEle.classList;
    if (isLoading) ahContentClss.add(ahContentClssAnnotation);
    else setTimeout(() => ahContentClss.remove(ahContentClssAnnotation), annotationDely);

    // add annotation to html document
    const { documentElement: ahDocumentEle } = document;
    const htmlClssAnnotation = 'html--loading';
    const htmlClss = ahDocumentEle.classList;
    if (isLoading) htmlClss.add(htmlClssAnnotation);
    else setTimeout(() => htmlClss.remove(htmlClssAnnotation), annotationDely);
  }, [isLoading]);

  // show or close the loading in smooth way
  const closePromise = (loadingElement) => {
    return new Promise((resolve) => {
      // show loading without wait
      if (!isLoading) resolve();
      // close loading with wait the animation for closing
      const loadingClose = 'loading--close';
      loadingElement.classList.add(loadingClose);
      // resolve after loading closed
      setTimeout(() => resolve(), 1200);
    });
  };

  // show loading or hide it
  const showLoading = (isShow) => {
    const { current: loadingElement } = loadingRef;
    closePromise(loadingElement).then(() => setIsLoading(!!isShow));
  };

  const contextValue = React.useMemo(() => ({ isLoading, showLoading }), [isLoading]);

  return (
    <LoadingContext.Provider value={contextValue}>
      {LoadingComponent(isLoading, loadingRef)}
      <div ref={ahContentContainerRef} className="ah-content">
        {children}
      </div>
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
