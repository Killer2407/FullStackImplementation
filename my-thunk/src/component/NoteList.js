import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteNote,
    retrieveNotes
} from "../actions/notes";

const NoteList = (props) => {
    const [currentNote, setCurrentNote] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const notes = useSelector(state => state.notes);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(retrieveNotes());
    });

    const setActiveNote = (note, index) => {
        setCurrentNote(note);
        setCurrentIndex(index);
    };

    const removeNote = (id) => {
        dispatch(deleteNote(id))
            .then(() => {
                props.history.push("/notes");
            })
            .catch(e => {
                console.log(e);
            });
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