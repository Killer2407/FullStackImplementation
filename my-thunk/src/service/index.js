import axios from "axios";

export const Api = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
        "Content-type": "application/json"
    }
});


export const getNotes = () => {
    return Api.get("/getNotes");
};

export const addNote = data => {
    return Api.post("/addNote", data);
};

export const removeNote = id => {
    return Api.delete(`/deleteNote/${id}`);
};

// const noteService = {
//     getNotes,
//     addNotes,
//     removeNote
// };
// export default noteService;