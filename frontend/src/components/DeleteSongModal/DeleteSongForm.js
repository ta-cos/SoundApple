import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import appleLogo from "../../images/apple-logo.png"
import { deleteSong } from "../../store/songs";
import { getAlbumsById } from "../../store/albums"

import './DeleteForm.css'

function DeleteSongForm({ open }) {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);

    const songs = Object.values(useSelector(state => state.songs))

    const [songId, setSongId] = useState(songs[0]?.id);

    useEffect(() => {
        dispatch(getAlbumsById(sessionUser.id))
    }, [dispatch, sessionUser])

    const updateSongId = (e) => {
        setSongId(e.target.value)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(deleteSong(songId))
        open(false)
    };

    return (
        <form onSubmit={handleSubmit} className="upload-form">
            <img className="signupImg" alt="logo" src={appleLogo} />
            <h1>What song would you like to remove</h1>
            <select className="delete-dropdown" onChange={updateSongId}>
                {songs?.map((song) => (
                    <option key={song?.id} value={song?.id}>{song?.title}</option>
                ))}
            </select>
            <button type="submit" className="upload-button">Remove</button>
        </form>
    );
}

export default DeleteSongForm;
