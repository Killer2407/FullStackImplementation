// import {
//     CREATE_NOTE,
//     RETRIEVE_NOTES,
//     DELETE_NOTE,
// } from "../actions/type";
// const initialState = [];
// function noteReducer(notes = initialState, action) {
//     const { type, payload } = action;
//     switch (type) {
//         case CREATE_NOTE:
//             return [...notes, payload];
//         case RETRIEVE_NOTES:
//             return payload;
//         case DELETE_NOTE:
//             return notes.filter(({ id }) => id !== payload.id);
//         default:
//             return notes;
//     }
// };
// export default noteReducer;