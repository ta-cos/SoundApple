import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import appleLogo from "../../images/apple-logo.png"
import './upload.css'
import { createSong } from "../../store/songs";
import { getAlbumsById } from "../../store/albums"


function UploadForm() {
    const albums = useSelector(state => {
        return state.albums.list
    })
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [title, setTitle] = useState("");
    const [albumId, setAlbum] = useState(albums[0].id);
    const [url, setURL] = useState("");
    const [errors, setErrors] = useState([]);
    const userId = sessionUser.id
    const history = useHistory()

    const updateAlbum = (e) => {
        setAlbum(e.target.value)
    };


    useEffect(() => {
        dispatch(getAlbumsById(sessionUser.id))
    }, [dispatch])



    const handleSubmit = async (e) => {
        e.preventDefault();

        const song = {
            userId,
            title,
            albumId: +albumId,
            audio: url
        }

        let createdSong = await dispatch(createSong(song));


        if (createdSong) {
            history.push('/library');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="upload-form">

            <img className="signupImg" alt="logo" src={appleLogo} />
            <h1>Share your music with the world</h1>

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

            <button type="submit" disabled={errors.length > 0} className="upload-button">Upload</button>

            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
        </form>
    );
}

export default UploadForm;
