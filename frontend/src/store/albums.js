//------- Variables/Helper Functions ---------------------------------------------------------------

import { csrfFetch } from "./csrf"

const CREATE_ALBUM = 'albums/create'
const LOAD_ALBUMS = 'albums/load'
const UPDATE_ALBUM = 'albums/update'
const DELETE_ALBUM = 'albums/delete'

//----- ACTION --------------------------------------------------------------------------


const newAlbum = (albums) => {
    return {
        type: CREATE_ALBUM,
        albums,
    }
}

const loadAlbums = albums => (
    {
        type: LOAD_ALBUMS,
        albums,
    });

const editAlbum = (albums) => {
    return {
        type: UPDATE_ALBUM,
        payload: albums,
    }
}

const removeAlbum = (id) => {
    return {
        type: DELETE_ALBUM,
        id
    }
}

//----- THUNKS --------------------------------------------------------------------------


export const createAlbum = (album) => async (dispatch) => {
    const { userId, title, img } = album;
    const response = await csrfFetch('/api/albums', {
        method: 'POST',
        body: JSON.stringify({
            userId,
            title,
            img,
        }),

    });
    const data = await response.json();
    dispatch(newAlbum(data));
    return response;
};

export const getAlbums = () => async dispatch => {

    const response = await fetch(`/api/albums`);

    if (response.ok) {
        const list = await response.json();
        dispatch(loadAlbums(list));
    }
};

export const getAlbumsById = (userId) => async dispatch => {
    const response = await fetch(`/api/users/${userId}/albums`);
    if (response.ok) {
        const list = await response.json();
        console.log(list)
        dispatch(loadAlbums(list));
    }
};

export const updateAlbums = (album) => async (dispatch) => {
    const { id, userId, title, img } = album;
    const response = await csrfFetch(`/api/albums/${id}`, {
        method: 'POST',
        body: JSON.stringify({
            id,
            userId,
            title,
            img,
        }),
    });
    const data = await response.json();
    dispatch(editAlbum(data.album));
    return response;
};

export const deleteAlbum = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/albums/${id}`, {
        method: 'DELETE',
    });
    dispatch(removeAlbum(id));
    return response;
};

//----- REDUCER --------------------------------------------------------------------------

const initialState = {};
const albumReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case LOAD_ALBUMS:
            action.albums.forEach(album => {
                newState[album.id] = album
            });
            return newState
        case CREATE_ALBUM:
        case UPDATE_ALBUM:
            newState[action.albums.id] = action.albums
            return newState
        case DELETE_ALBUM:
            delete newState[action.id];
            return newState
        default:
            return state;
    }
};

export default albumReducer;
