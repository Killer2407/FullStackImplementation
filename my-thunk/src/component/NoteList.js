import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteNote,
    retrieveNotes
} from "../actions/notes";
import { store } from "../redux";
import { DELETE_NOTE_WATCHER, GET_NOTES_WATCHER } from "../redux/types";

const NoteList = (props) => {
    const [currentNote, setCurrentNote] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const notesData = useSelector(state => state.notes);
    const [notes,setNotes] = useState(null);


    console.log('notes from selector',notes);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('hit');
        // dispatch(retrieveNotes());
        dispatch({type:GET_NOTES_WATCHER});
    },[]);

    useEffect(()=>{
        // console.log('nD',notesData)
        if(notesData)
        setNotes(notesData?.notes);
    },[notesData])

    const setActiveNote = (note, index) => {
        setCurrentNote(note);
        setCurrentIndex(index);
    };

    const removeNote = (id) => {
        // dispatch(deleteNote(id))
        //     .then(() => {
        //         props.history.push("/notes");
        //     })
        //     .catch(e => {
        //         console.log(e);
        //     });
        console.log('hit delete')
        dispatch({type:DELETE_NOTE_WATCHER,payload:id})
    };

    return (
        <div className="list row">
            <div className="col-md-8">
                <div className="input-group mb-3">
                </div>
            </div>
            <div className="col-md-6">
                <h4>Note List</h4>
                <ul className="list-group">
                {notes && console.log('notes here',notes,store.getState())}
                    {notes &&
                        notes.map((note, index) => (
                            <li
                                className={
                                    "list-group-item " + (index === currentIndex ? "active" : "")
                                }
                                onClick={() => setActiveNote(note, index)}
                                key={index}
                            >
                                {note.title}
                                <button style={{ marginLeft: 20, float: "right" }} className="btn btn-danger mr-5" onClick={() => removeNote(note.id)}>
                                    Delete
                                </button>
                            </li>
                        ))}
                </ul>
            </div>
            <div className="col-md-6">
                {currentNote ? (
                    <div>
                        <h4>Note</h4>
                        <div>
                            <label>
                                <strong>Title:</strong>
                            </label>{" "}
                            {currentNote.title}
                        </div>
                        <div>
                            <label>
                                <strong>Description:</strong>
                            </label>{" "}
                            {currentNote.description}
                        </div>
                    </div>
                ) : (
                    <div>
                        <br />
                        <p>Click on notes to see the details!</p>
                    </div>
                )}
            </div>
        </div>
    );
};
export default NoteList;