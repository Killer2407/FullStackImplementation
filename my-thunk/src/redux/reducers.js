import { ADD_NOTE, DELETE_NOTE, GET_NOTES } from "./types"

export const INITITAL_STATE = {
    notes:null
}

export const getNotesAction = (notes) =>({
    type:GET_NOTES,
    notes
})

export const addNoteAction = (note) =>
{console.log(note);
return ({
    type:ADD_NOTE,
    note
})}

export const deleteNoteAction = (noteId) =>({
    type:DELETE_NOTE,
    noteId
})



export const noteReducer = (state = INITITAL_STATE,action) => {
    switch(action.type) {
        case GET_NOTES:
            console.log('actn',action)
            const {notes} = action
            console.log('will update state', {...state,notes:[ ...notes]})
            return {...state,notes:[...notes]}
        case ADD_NOTE:
            const {note} = action;
            // const {data} = yield call(requestAddNote,note);
            return {...state,notes:{...state?.notes,note}};
        case DELETE_NOTE:  
            const {id} = action;
            // const {data} = yield call(requestDeleteNoteId,noteId);
            const filteredNotes = state.notes.filter(noteId=>id!==noteId)
            return {...state,notes:filteredNotes}
        default:
            return state  
    }};