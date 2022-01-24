import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import {store} from '../store/store';
import AppRouter from './AppRouter';

const App = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppRouter/>
            </Provider>
        </HashRouter>
    );
};

export default App;
