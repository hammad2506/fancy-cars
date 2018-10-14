import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home'
import reduxStore from './store/store';
import { Provider } from 'react-redux';
import normalize from 'normalize.css';
import './styles/style.css';

const store = reduxStore();

const APP = (
    <Provider store={store}>
        <Home />
    </Provider>
);

ReactDOM.render(APP, document.getElementById('root'));

