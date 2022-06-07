import { all, call, put, takeLatest,take } from "@redux-saga/core/effects";
import { removeNote } from "../service";
import {  addNote,  getNotes } from "../service";
import { addNoteAction, deleteNoteAction, getNotesAction } from "./reducers";
import { ADD_NOTE_WATCHER, DELETE_NOTE, DELETE_NOTE_WATCHER, GET_NOTES, GET_NOTES_WATCHER } from "./types";



export function* watcherSagaGetNotes  () { 
    while(true){
      yield take(GET_NOTES_WATCHER);
      const {data} = yield call (getNotes);
      yield put(getNotesAction(data));
    }
}


export function* watcherSagaDeleteNote  (atn) { 
    while(true){
        const action = yield take(DELETE_NOTE_WATCHER);
         yield call (removeNote,action.id);
        // console.log('data del',data)
        yield put(deleteNoteAction(action.id));
    }
    }


    
export function* watcherSagaAddNote  () { 
        while(true){
        const action =  yield take(ADD_NOTE_WATCHER);
        const {data} = yield call (addNote,action.note);
        console.log('data from add api',data)
        yield put (addNoteAction(data))
        }
    
}