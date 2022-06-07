import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { createNote } from "../actions/notes";
import { ADD_NOTE_WATCHER } from "../redux/types";

const AddNote = () => {
    const initialNoteState = {
        title: "",
        description: "",
    };
    const [note, setNote] = useState(initialNoteState);
    const [submitted, setSubmitted] = useState(false);
    const dispatch = useDispatch();

    const handleInputChange = event => {
        const { name, value } = event.target;
        setNote({ ...note, [name]: value });
    };

    const saveNote = () => {
        // const { title, description } = note;
        // dispatch(createNote(title, description))
        //     .then(data => {
        //         setNote({
        //             title: data.title,
        //             description: data.description,
        //         });
        //         setSubmitted(true);
        //         console.log(data);
        //     })
        //     .catch(e => {
        //         console.log(e);
        //     });
        // dispatch({type:ADD_NOTE_WATCHER});
        console.log('before dispatching add note',note)
        dispatch({type:ADD_NOTE_WATCHER,note})
    };

    const newNote = () => {
        setNote(initialNoteState);
        setSubmitted(false);
    };

    return (
        <div className="submit-form">
            {submitted ? (
                <div>
                    <h4>You submitted successfully!</h4>
                    <button className="btn btn-success" onClick={newNote}>
                        Add
                    </button>
                </div>
            ) : (
                <div>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            required
                            value={note.title}
                            onChange={handleInputChange}
                            name="title"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            className="form-control"
                            id="description"
                            required
                            value={note.description}
                            onChange={handleInputChange}
                            name="description"
                        />
                    </div>
                    <button onClick={saveNote} className="btn btn-success">
                        Submit
                    </button>
                </div>
            )}
        </div>
    );
};
export default AddNote;