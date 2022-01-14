import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './AddAlbumForm.css'
import appleLogo from "../../images/apple-logo.png"
import { createAlbum } from "../../store/albums";
import { useHistory } from "react-router-dom"

function AddAlbumForm() {
    const sessionUser = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [img, setImg] = useState("");
    const [errors, setErrors] = useState([]);
    const userId = sessionUser.id;
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors([])
        const album = {
            userId,
            title,
            img
        }

        dispatch(createAlbum(album))
        history.push('/library')
    }

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <img className="loginImg" alt="logo" src={appleLogo} />
            <h1>Share your album with the world</h1>
            <h3>You must have an album to upload songs</h3>

            <input
                className="form-textbox"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder="Album Title"
            />
            <input
                className="form-textbox"
                type="text"
                value={img}
                onChange={(e) => setImg(e.target.value)}
                placeholder="Image URL"
            />

            <ul>
                {errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                ))}
            </ul>

            <button className="form-button" type="submit">Submit</button>

        </form >
    );
}

export default AddAlbumForm;
