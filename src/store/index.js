import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import reducers from './ducks';

import reactotron from '../config/reactotron';

const isDevelopment = process.env.NODE_ENV === 'development'

// LOGGER REACTOTRON
const sagaMonitor = isDevelopment
  ? reactotron.createSagaMonitor()
  : null;

// CONFIGURAÇÃO DE MIDDLEWARES 
const sagaMiddleware = createSagaMiddleware({sagaMonitor});

const middleware = [sagaMiddleware];

const composer = isDevelopment
  ? compose(
    applyMiddleware(...middleware),
    reactotron.createEnhancer()
  )
  : applyMiddleware(...middleware);

const store = createStore(reducers, composer);

sagaMiddleware.run(sagas);

export default store;