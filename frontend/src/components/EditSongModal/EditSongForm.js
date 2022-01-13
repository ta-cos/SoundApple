import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
import appleLogo from "../../images/apple-logo.png"
import { updateSong } from "../../store/songs";

import './EditSong.css'


function EditSongForm() {
    const sessionUser = useSelector((state) => state.session.user);
    const songs = useSelector(state => {
        return state.songs.list
    })
    const albums = useSelector(state => {
        return state.albums.list
    })
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [album, setAlbum] = useState("");
    const [url, setURL] = useState("");
    const [songId, setSongId] = useState(songs[0]?.id);
    const [errors, setErrors] = useState([]);
    const userId = sessionUser.id
    const history = useHistory()

    if (!sessionUser) {
        return <Redirect to="/login" />
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([])
        const song = {
            id: songId,
            userId,
            title,
            album,
            url
        }
        await dispatch(updateSong(song));

        history.push('/library')
    };

    const updateSongId = (e) => {
        setSongId(e.target.value)
        console.log(songId)
    };

    const updateAlbum = (e) => {
        setAlbum(e.target.value)
    };

    return (
        <form onSubmit={handleSubmit} className="upload-form">

            <img className="signupImg" alt="logo" src={appleLogo} />
            <h1>Edit your song info</h1>

            <select onChange={updateSongId}>
                {songs.map((song) => (
                    <option key={song.id} value={song.id}>{song.title}</option>
                ))}
            </select>

            <input
                className="upload-textbox"
                placeholder="Title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <select onChange={updateAlbum}>
                {albums.map((album) => (
                    <option key={album.id} value={album.id}>{album.title}</option>
                ))}
                <option value={null}>Single</option>
            </select>

            <input
                placeholder="Song URL"
                className="upload-textbox"
                type="url"
                value={url}
                onChange={(e) => setURL(e.target.value)}
            />

            <button type="submit" className="upload-button">Edit</button>

            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
        </form>
    );
}

export default EditSongForm;
