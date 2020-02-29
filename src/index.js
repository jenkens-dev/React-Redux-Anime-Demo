import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

const initialState = {
   animes: {
      1: {
         id: 1,
         name: 'Haikyuu!!',
         votes: 0,
         image: 'https://cdn.myanimelist.net/images/anime/1694/104929l.jpg',
      },
      2: {
         id: 2,
         name: 'Hajime No Ippo',
         votes: 0,
         image: 'https://cdn.myanimelist.net/images/anime/9/8833l.jpg',
      },
      3: {
         id: 3,
         name: 'Slam Dunk',
         votes: 0,
         image: 'https://cdn.myanimelist.net/images/anime/1492/94403l.jpg',
      },
      4: {
         id: 4,
         name: 'Eyeshield 21',
         votes: 0,
         image: 'https://cdn.myanimelist.net/images/anime/12/66961l.jpg',
      },
      5: {
         id: 5,
         name: 'Diamond no Ace',
         votes: 0,
         image: 'https://cdn.myanimelist.net/images/anime/5/54235l.jpg',
      },
   },
};

const store = createStore(reducer, initialState);

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
