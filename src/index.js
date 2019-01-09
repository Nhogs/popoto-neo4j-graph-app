import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import createStore from './store';
import neo4jDesktopService from './services/neo4jDesktopService';
import AppContainer from './containers/AppContainer';

import './index.css';

const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    document.getElementById('root')
);

neo4jDesktopService(store);