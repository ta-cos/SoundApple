import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, Redirect } from 'react-router-dom';
import { getSongs } from '../../store/songs';
import UploadSongModal from '../UploadSongModal';

import './MyMusic.css'

function MyMusic() {

    const handleAddAlbum = () => {
        console.log("added Album.... not really though")
    }

    const handleRemoveAlbum = () => {
        console.log("removed Album.... not really though")
    }

    const handleAddSong = () => {
        console.log("added Song... not really though")
    }

    const handleRemoveSong = () => {
        console.log("removed Song.... not really though")

    }

    return (
        <div>
            <div className="albums-div">
                <h1>My Albums</h1>
                <button onClick={handleAddAlbum}>Add Album</button>
                <button onClick={handleRemoveAlbum}>Remove Album</button>
            </div>
            <div className="songs-div">
                <h1>My Songs</h1>
                <UploadSongModal />
                <button onClick={handleRemoveSong}>Remove Song</button>
            </div>

        </div>
    );
}

export default MyMusic;
