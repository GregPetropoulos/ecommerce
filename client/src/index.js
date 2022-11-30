import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//2ND STEP IN SETTING UP RTK--WRAPPING WHOLE APPLICATION IN THE STORE
import { store } from './app/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
