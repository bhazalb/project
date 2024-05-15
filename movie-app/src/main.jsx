import ReactDOM from 'react-dom';
import React from "react";
import { Provider } from 'react-redux';
import App from './App.jsx';
import './index.scss';
import { store } from './store/store.js';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);