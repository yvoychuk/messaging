import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import postsStore from './stores/postsStore';
import commentsStore from './stores/commentsStore';
import categoriesStore from './stores/categoriesStore';
import interactionsStore from './stores/interactionsStore';
import { Provider } from 'mobx-react';

const stores = {
  postsStore,
  commentsStore,
  categoriesStore,
  interactionsStore
}

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root')
);
