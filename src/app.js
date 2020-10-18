import AppRouter from './router/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { startSetBlogs } from './actions/blogs';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetBlogs()).then(() => {
    ReactDOM.render(jsx ,document.getElementById('app'));
});

