import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import reducers from './ducks';

import '../config/reactotron';

const isDevelopment = process.env.NODE_ENV === 'development'

const sagaMonitor = isDevelopment
  ? console.tron.createSagaMonitor()
  : null;

const createAppropriateStore = isDevelopment
  ? console.tron.createStore
  : createStore;

const sagaMiddleware = createSagaMiddleware({sagaMonitor, createAppropriateStore});

const middleware = [sagaMiddleware];

const composer = isDevelopment
  ? compose(
    applyMiddleware(...middleware)
  )
  : applyMiddleware(...middleware)

const store = createStore(reducers, composer);

sagaMiddleware.run(sagas);

export default store;