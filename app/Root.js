/**
 * Created by igor on 08.06.16.
 */
import React, {
    Component
} from 'react';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
const store = configureStore();

import App from './containers/App';

const Root = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

export default Root;