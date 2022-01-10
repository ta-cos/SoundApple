//------- Variables/Helper Functions ---------------------------------------------------------------

const CREATE_SONG = 'songs/create'
const LOAD_SONGS = 'songs/load'
const UPDATE_SONG = 'songs/update'
const DELETE_SONG = 'songs/delete'

//----- ACTION --------------------------------------------------------------------------


const newSong = (song) => {
    return {
        type: CREATE_SONG,
        payload: song,
    }
}

const loadSongs = list => (
    {
        type: LOAD_SONGS,
        list,
    });

const editSong = (song) => {
    return {
        type: UPDATE_SONG,
        payload: song,
    }
}

const removeSong = () => {
    return {
        type: DELETE_SONG
    }
}

//----- THUNKS --------------------------------------------------------------------------


export const createSong = (song) => async (dispatch) => {
    console.log("song", song)
    const { userId, album, title, audio } = song;
    const response = await fetch('/api/songs', {
        method: 'POST',
        body: JSON.stringify({
            userId,
            album,
            title,
            audio,
        }),

    });
    const data = await response.json();
    dispatch(newSong(data.song));
    return response;
};

export const getSongs = () => async dispatch => {
    const response = await fetch(`/api/songs`);

    if (response.ok) {
        const list = await response.json();
        dispatch(loadSongs(list));
    }
};

export const updateSong = (song) => async (dispatch) => {
    const { userId, albumId, title, audio } = song;
    const response = await fetch('/api/songs/:id', {
        method: 'POST',
        body: JSON.stringify({
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

export const deleteSong = () => async (dispatch) => {
    const response = await fetch('/api/songs/:id', {
        method: 'DELETE',
    });
    dispatch(removeSong());
    return response;
};

//----- REDUCER --------------------------------------------------------------------------

const initialState = {};
const songReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_SONGS:
            const allSongs = {}
            action.list.forEach(song => {
                allSongs[song.id] = song;
            });
            return {
                ...allSongs,
                ...state,
                list: action.list,
            };
        case CREATE_SONG:
            if (!state[action.song.id]) {
                const newState = {
                    ...state,
                    [action.song.id]: action.song
                };
                const songList = newState.list.map(id => newState[id]);
                songList.push(action.song);
                return newState;
            } return {
                ...state,
                [action.song.id]: {
                    ...state[action.song.id],
                    ...action.song,
                }
            };
        case UPDATE_SONG:
            newState = Object.assign({}, state);
            newState.song = action.payload;
            return newState;
        case DELETE_SONG:
            newState = Object.assign({}, state);
            newState.song = null;
            return newState;
        default:
            return state;
    }
};

export default songReducer;
