import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/App.tsx';

// Wait, we can't run this easily via node if it imports JSX/TSX unless we use tsx
