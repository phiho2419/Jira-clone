import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas/rootSaga';
import { userReducer } from './reducers/userReducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    userReducer
});


const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;