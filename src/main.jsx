import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import store from './store'; // Import the Redux store
import AllRoutes from './allRoutes';
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

