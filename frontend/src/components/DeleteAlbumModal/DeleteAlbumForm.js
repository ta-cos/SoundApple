import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import appleLogo from "../../images/apple-logo.png"
import { deleteAlbum } from "../../store/albums";
import { getAlbumsById } from "../../store/albums"


function DeleteAlbumForm() {
    const albums = useSelector(state => {
        return state.albums.list
    })
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [albumId, setAlbumId] = useState(albums[0]?.id);
    const history = useHistory()

    useEffect(() => {
        dispatch(getAlbumsById(sessionUser.id))
    }, [dispatch, sessionUser])

    const updateAlbumId = (e) => {
        setAlbumId(e.target.value)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(deleteAlbum(albumId))
        history.push('/library')
    };

    return (
        <form onSubmit={handleSubmit} className="upload-form">

            <img className="signupImg" alt="logo" src={appleLogo} />
            <h1>Which album would you like to remove</h1>

            <select className="delete-dropdown" onChange={updateAlbumId}>
                {albums.map((album) => (
                    <option key={album.id} value={album.id}>{album.title}</option>
                ))}
            </select>


            <button type="submit" className="upload-button">Remove</button>

        </form>
    );
}

export default DeleteAlbumForm;
