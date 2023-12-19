'use client';

import ReactDOM from 'react-dom';

export function PreloadResources() {
  ReactDOM.preload('https://uploadthing.com/f/54a0767e-2ed8-40c0-8ddd-d179b5a6ba7b-g75vai.otf', {
    as: 'font',
    crossOrigin: 'anonymous',
  });
  ReactDOM.preload('https://uploadthing.com/f/f7576d04-d449-4308-b077-f932f4fc8b50-jkn1h4.otf', {
    as: 'font',
    crossOrigin: 'anonymous',
  });
  ReactDOM.preload('https://uploadthing.com/f/64264e83-3d45-49b3-812f-93c3963adcba-pl8zk6.otf', {
    as: 'font',
    crossOrigin: 'anonymous',
  });
  ReactDOM.preload('https://uploadthing.com/f/63cb5e9b-8c90-409c-8006-bbefc19b44a3-mafubu.otf', {
    as: 'font',
    crossOrigin: 'anonymous',
  });
  ReactDOM.preload('https://uploadthing.com/f/1ab7d776-5cfa-4d25-9850-67584ff51b8c-3d85lc.otf', {
    as: 'font',
    crossOrigin: 'anonymous',
  });
  // Hello
  return null;
}
