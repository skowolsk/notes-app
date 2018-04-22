import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import thunk from 'redux-thunk'
import parseNote from '../middlewares/parseNote'

const middlewares = thunk;

const store = createStore(
    reducer,
    applyMiddleware(middlewares, parseNote)
);

export default store;
