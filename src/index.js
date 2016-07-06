/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import LeaderboardPage from './containers/LeaderboardPage';
import './styles/index.scss';

const store = configureStore();

render(
  <Provider store={store}>
    <LeaderboardPage />
  </Provider>, document.getElementById('app')
);

