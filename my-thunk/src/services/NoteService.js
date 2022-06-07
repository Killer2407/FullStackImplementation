import http from "../http-common";
const getAll = () => {
    return http.get("/getNotes");
};

const create = data => {
    return http.post("/addNote", data);
};

const remove = id => {
    return http.delete(`/deleteNote/${id}`);
};

const noteService = {
    getAll,
    create,
    remove
};
export default noteService;