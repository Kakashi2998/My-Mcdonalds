import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router-dom';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import CartReducer from './Store/Reducers/CartReducer';
import OrderReducer from './Store/Reducers/OrderReducer';
import BurgerReducer from './Store/Reducers/BurgerReducer';
import AuthReducer from './Store/Reducers/AuthReducer';
import history from './history';

const combinedReducers = combineReducers({
  cartReducer: CartReducer,
  orderReducer: OrderReducer,
  burgerReducer: BurgerReducer,
  authReducer: AuthReducer
})

const composeEnhancers = process.env.NODE_ENV === 'development' ? 
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: null || compose;

const store = createStore(combinedReducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();