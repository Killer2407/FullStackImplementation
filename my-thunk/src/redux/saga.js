import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { removeNote } from "../service";
import {  addNote,  getNotes } from "../service";
import { getNotesAction } from "./reducers";
import { ADD_NOTE_WATCHER, DELETE_NOTE_WATCHER, GET_NOTES, GET_NOTES_WATCHER } from "./types";



export function* handleGetNotes (){
    console.log('hi');
    const {data} = yield call (getNotes);
    yield put(getNotesAction(data));
    console.log('data',data)
}


export function* handleAddNote (){
    const {data} = yield call (addNote);
    yield put(GET_NOTES,data);

}


export function* handleDeleteNote (id){
    const {data} = yield call (removeNote(id));
    yield put(GET_NOTES,data);

}





// export const watcherSaga = () => 
//     [
//         takeLatest(GET_NOTES_WATCHER, handleGetNotes),
//         takeLatest(ADD_NOTE_WATCHER, handleAddNote),
//         takeLatest(DELETE_NOTE_WATCHER, handleDeleteNote)
//     ]
    


export function* watcherSagaGetNotes  () { 
console.log('called1');
   yield takeLatest(GET_NOTES_WATCHER, handleGetNotes)

}


export function* watcherSagaDeleteNote  (atn) { 
    console.log('called2',atn);
       yield takeLatest(DELETE_NOTE_WATCHER, handleDeleteNote())
    
    }


    
export function* watcherSagaAddNote  () { 
    console.log('called3');
       yield takeLatest(ADD_NOTE_WATCHER, handleAddNote)
    
    }