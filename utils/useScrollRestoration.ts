import { useEffect } from 'react';
import Router, { NextRouter } from 'next/router';

const saveScrollPos = (asPath: string) => {
  sessionStorage.setItem(
    `scrollPos:${asPath}`,
    JSON.stringify({ x: window.scrollX, y: window.scrollY }),
  );
};

const restoreScrollPos = (asPath: string) => {
  const json = sessionStorage.getItem(`scrollPos:${asPath}`);
  const scrollPos = json ? JSON.parse(json) : undefined;
  if (scrollPos) {
    window.scrollTo(scrollPos.x, scrollPos.y);
  }
};

export const useScrollRestoration = (router: NextRouter) => {
  useEffect(() => {
    if (!('scrollRestoration' in window.history)) return;
    let shouldScrollRestore = false;
    window.history.scrollRestoration = 'manual';
    restoreScrollPos(router.asPath);

    const onBeforeUnload = (event: BeforeUnloadEvent) => {
      saveScrollPos(router.asPath);
      // eslint-disable-next-line no-param-reassign
      delete event.returnValue;
    };

    const onRouteChangeStart = () => {
      saveScrollPos(router.asPath);
    };

    const onRouteChangeComplete = (url: string) => {
      if (shouldScrollRestore) {
        shouldScrollRestore = false;

        restoreScrollPos(url);
      }
    };

    window.addEventListener('beforeunload', onBeforeUnload);
    Router.events.on('routeChangeStart', onRouteChangeStart);
    Router.events.on('routeChangeComplete', onRouteChangeComplete);
    Router.beforePopState(() => {
      shouldScrollRestore = true;
      return true;
    });

    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener('beforeunload', onBeforeUnload);
      Router.events.off('routeChangeStart', onRouteChangeStart);
      Router.events.off('routeChangeComplete', onRouteChangeComplete);
      Router.beforePopState(() => true);
    };
  }, [router]);
};
