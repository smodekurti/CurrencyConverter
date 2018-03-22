import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import logger from 'redux-logger';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middleWare = [sagaMiddleware];

if(process.env.NODE_ENV === 'development'){
    middleWare.push(logger);
}


const store = createStore(reducers, applyMiddleware(...middleWare));

sagaMiddleware.run(rootSaga);

export default store;
