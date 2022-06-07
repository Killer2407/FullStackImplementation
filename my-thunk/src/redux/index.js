import { createStore, applyMiddleware, combineReducers } from 'redux';
import { INITITAL_STATE, noteReducer } from './reducers';
import createSagaMiddleware from 'redux-saga';
import { GET_NOTES } from './types';
import { all, call, takeLatest,fork } from '@redux-saga/core/effects';
import { watcherSaga, watcherSagaAddNote, watcherSagaDeleteNote, watcherSagaGetNotes } from './saga';
const sagaMiddleware = createSagaMiddleware();


 function* rootSaga(){
   yield all([fork(watcherSagaAddNote), fork(watcherSagaDeleteNote),fork(watcherSagaGetNotes)]);
}

const rootReducer = combineReducers({
    notes:noteReducer
})

const middleware = [sagaMiddleware];

 export const store = createStore(rootReducer,INITITAL_STATE,
    applyMiddleware(...middleware)
    );

 sagaMiddleware.run(rootSaga);