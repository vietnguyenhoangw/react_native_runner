import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from '@redux/reducers';
import rootSagas from '@redux/sagas';

/**
 * Redux Setting
 */

const sagaMiddleware = createSagaMiddleware();

let middleware = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));
sagaMiddleware.run(rootSagas);
const persistor = persistStore(store);

export {store, persistor};
