import App from './app';
import {Provider} from "react-redux";
import {HashRouter} from 'react-router-dom'
import React from 'react';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App store={store}/>
    </HashRouter>
  </Provider>
);

export default Root;