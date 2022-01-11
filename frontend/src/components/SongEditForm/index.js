import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import appleLogo from "../../images/apple-logo.png"
import { updateSong } from "../../store/songs";


function EditSongForm() {
    const sessionUser = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [album, setAlbum] = useState("");
    const [url, setURL] = useState("");
    const [errors, setErrors] = useState([]);
    const history = useHistory()
    const { id } = useParams();

    if (!sessionUser) {
        return <Redirect to="/login" />
    }

    const userId = sessionUser.id


    const handleSubmit = async (e) => {
        e.preventDefault();

        const song = {
            id,
            userId,
            title,
            album,
            url
        }

        let updated = await dispatch(updateSong(song));


        if (updated) {
            history.goBack();
        }
    };

    return (
        <form onSubmit={handleSubmit} className="upload-form">

            <img className="signupImg" alt="logo" src={appleLogo} />
            <h1>Edit your musics info</h1>

            <input
                className="upload-textbox"
                placeholder="Title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                placeholder="Album"
                className="upload-textbox"
                type="text"
                value={album}
                onChange={(e) => setAlbum(e.target.value)}
                required
            />

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

export default EditSongForm;
