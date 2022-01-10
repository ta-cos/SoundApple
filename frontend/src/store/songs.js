// //------- Variables ---------------------------------------------------------------

// const CREATE_SONG = 'songs/create'
// const UPDATE_SONG = 'songs/update'
// const DELETE_SONG = 'songs/delete'

// //----- ACTION --------------------------------------------------------------------------


// const newSong = () =>{
//     return {
//         type: CREATE_SONG,
//         payload: song,
//     }
// }
// const editSong = () => {
//     return {
//         type: UPDATE_SONG,
//         payload: song,
//     }
// }

// const removeSong = () => {
//     return {
//         type: DELETE_SONG
//     }
// }

// //----- THUNKS --------------------------------------------------------------------------


// export const createSong = (song) => async (dispatch) => {
//     const { userId, albumId, title, audio } = song;
//     const response = await fetch('/api/songs', {
//         method: 'POST',
//         body: JSON.stringify({
//             userId,
//             albumId,
//             title,
//             audio,
//         }),

//     });
//     const data = await response.json();
//     dispatch(createSong(data.song));
//     return response;
// };

// export const updateSong = (song) => async (dispatch) => {
//     const { userId, albumId, title, audio } = song;
//     const response = await fetch('/api/songs/:id', {
//         method: 'POST',
//         body: JSON.stringify({
//             userId,
//             albumId,
//             title,
//             audio,
//         }),
//     });
//     const data = await response.json();
//     dispatch(editSong(data.song));
//     return response;
// };

// export const deleteSong = () => async (dispatch) => {
//     const response = await fetch('/api/songs/:id', {
//         method: 'DELETE',
//     });
//     dispatch(removeSong());
//     return response;
// };

// //----- REDUCER --------------------------------------------------------------------------

// const songReducer = (state = initialState, action) => {
//     let newState;
//     switch (action.type) {
//         case CREATE_SONG:
//             newState = Object.assign({}, state);
//             newState.song = action.payload;
//             return newState;
//         case UPDATE_SONG:
//             newState = Object.assign({}, state);
//             newState.song = action.payload;
//             return newState;
//         case DELETE_SONG:
//             newState = Object.assign({}, state);
//             newState.song = null;
//             return newState;
//         default:
//             return state;
//     }
// };

// export default songReducer;
