import jsdom from 'jsdom';

const FAKE_DOM_HTML = `
<html>
<body>
</body>
</html>
`;

const setupFakeDOM = () => {
  if (typeof document !== 'undefined') {
    return;
  }

  // setup the fake DOM environment.
  global.document = jsdom.jsdom(FAKE_DOM_HTML);
  global.window = document.defaultView;
  window.innerWidth = '600px';
  global.navigator = window.navigator;
};

setupFakeDOM();
