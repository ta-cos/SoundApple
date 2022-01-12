//------- Variables/Helper Functions ---------------------------------------------------------------

import { csrfFetch } from "./csrf"

const CREATE_ALBUM = 'albums/create'
const LOAD_ALBUMS = 'albums/load'
const UPDATE_ALBUM = 'albums/update'
const DELETE_ALBUM = 'albums/delete'

//----- ACTION --------------------------------------------------------------------------


const newAlbum = (album) => {
    return {
        type: CREATE_ALBUM,
        album,
    }
}

const loadAlbums = list => (
    {
        type: LOAD_ALBUMS,
        list,
    });

const editAlbum = (album) => {
    return {
        type: UPDATE_ALBUM,
        payload: album,
    }
}

const removeAlbum = () => {
    return {
        type: DELETE_ALBUM
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
    dispatch(removeAlbum());
    return response;
};

//----- REDUCER --------------------------------------------------------------------------

const initialState = {
    list: []
};
const albumReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_ALBUMS:
            const allAlbums = {}
            action.list.forEach(albums => {
                allAlbums[albums.id] = albums;
            });
            return {
                ...allAlbums,
                ...state,
                list: action.list,
            };
        case CREATE_ALBUM:
            if (!state[action.album.id]) {
                const newState = {
                    ...state,
                    [action.album.id]: action.album
                };
                const albumList = newState.list.map(id => newState[id]);
                albumList.push(action.album);
                return newState;
            } return {
                ...state,
                [action.album.id]: {
                    ...state[action.album.id],
                    ...action.album,
                }
            };
        case UPDATE_ALBUM:
            newState = Object.assign({}, state);
            newState.album = action.payload;
            return newState;
        case DELETE_ALBUM:
            newState = Object.assign({}, state);
            newState.album = null;
            return newState;
        default:
            return state;
    }
};

export default albumReducer;
