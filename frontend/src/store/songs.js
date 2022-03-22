//------- Variables/Helper Functions ---------------------------------------------------------------

import { csrfFetch } from "./csrf"

const CREATE_SONG = 'songs/create'
const LOAD_SONGS = 'songs/load'
const UPDATE_SONG = 'songs/update'
const DELETE_SONG = 'songs/delete'

//----- ACTION --------------------------------------------------------------------------


const newSong = (songs) => {
    return {
        type: CREATE_SONG,
        songs,
    }
}


const loadSongs = songs => (
    {
        type: LOAD_SONGS,
        songs,
    });

const editSong = (songs) => {
    return {
        type: UPDATE_SONG,
        payload: songs,
    }
}

const removeSong = (id) => {
    return {
        type: DELETE_SONG,
        id
    }
}

//----- THUNKS --------------------------------------------------------------------------


export const createSong = (song) => async (dispatch) => {
    const { userId, albumId, title, audio } = song;
    const response = await csrfFetch('/api/songs', {
        method: 'POST',
        body: JSON.stringify({
            userId,
            albumId,
            title,
            audio,
        }),

    });
    const data = await response.json();
    dispatch(newSong(data));
    return response;
};

export const getSongs = () => async dispatch => {

    const response = await fetch(`/api/songs`);

    if (response.ok) {
        const list = await response.json();
        dispatch(loadSongs(list));
    }
};

export const getSongsById = (id) => async dispatch => {
    const response = await fetch(`/api/users/${id}/songs`);

    if (response.ok) {
        const list = await response.json();
        dispatch(loadSongs(list));
    }
}


export const updateSong = (song) => async (dispatch) => {
    const { id, userId, albumId, title, audio } = song;

    const response = await csrfFetch(`/api/songs/${id}`, {
        method: 'POST',
        body: JSON.stringify({
            id,
            userId,
            albumId,
            title,
            audio,
        }),
    });
    const data = await response.json();
    dispatch(editSong(data.song));
    return response;
};

export const deleteSong = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/songs/${id}`, {
        method: 'DELETE',
    });
    dispatch(removeSong(id));
    return response;
};

//----- REDUCER --------------------------------------------------------------------------

const initialState = {};
const songReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case LOAD_SONGS:
            action.songs.forEach(song => {
                newState[song.id] = song
            });
            return newState
        case CREATE_SONG:
        case UPDATE_SONG:
            newState[action.songs.id] = action.songs
            return newState
        case DELETE_SONG:
            delete newState[action.id];
            return newState
        default:
            return state;
    }
};

export default songReducer;
