import {
    CREATE_NOTE,
    RETRIEVE_NOTES,
    DELETE_NOTE,
  } from "./type";
  import NoteDataService from "../services/NoteService";

  export const createNote = (title, description) => async (dispatch) => {
    try {
      const res = await NoteDataService.create({ title, description });
      dispatch({
        type: CREATE_NOTE,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  export const retrieveNotes = () => async (dispatch) => {
    try {
      const res = await NoteDataService.getAll();
      dispatch({
        type: RETRIEVE_NOTES,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const deleteNote = (id) => async (dispatch) => {
    try {
      await NoteDataService.remove(id);
      dispatch({
        type: DELETE_NOTE,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };