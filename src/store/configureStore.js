import { createStore, combineReducers, applyMiddleware } from 'redux';
import blogsReducer from '../reducers/blogs';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

export default () => {

    const store = createStore(
        combineReducers({
            blogs: blogsReducer,
            filters: filtersReducer
        }),
        applyMiddleware(thunk)
    );

    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    return store;

};

/*

*/