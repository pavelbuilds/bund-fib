'use client';

import dynamic from 'next/dynamic';

// Leva touches `localStorage` at import time, so it must only load on the client.
const DevPanelInner = dynamic(() => import('./DevPanelInner'), {
  ssr: false,
});

const DevPanel = () => {
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }
  return <DevPanelInner />;
};

export default DevPanel;
