import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/App';
import fs from 'fs';

// To mock window/document if needed by components
global.window = {} as any;
global.document = {} as any;
global.window.addEventListener = () => {};
global.window.removeEventListener = () => {};

try {
  const html = renderToString(<App />);
  fs.writeFileSync('output.html', html);
  console.log("Rendered successfully!");
} catch (e) {
  console.error("Error rendering:", e);
}
