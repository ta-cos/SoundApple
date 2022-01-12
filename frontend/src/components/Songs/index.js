import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, Redirect } from 'react-router-dom';
import { getOneSong, getSongs } from '../../store/songs';
import LoginFormModal from '../LoginFormModal';
import SongDetails from '../SongDetails';

import './songs.css'



const Songs = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSongs())
    }, [dispatch])

    const songs = useSelector(state => {
        return state.songs.list;
    });

    const sessionUser = useSelector((state) => state.session.user);

    if (!sessionUser) {
        return (
            <div className='notLoggedIn'>
                <img className='sadCat' src="https://media.istockphoto.com/photos/cute-kitten-portrait-british-shorthair-cat-picture-id916159418?k=20&m=916159418&s=612x612&w=0&h=rHUiHZGWTjqPyO7ArbEHWUpezE5u46ncxDCH24Vrj9M="></img>
                <h2>You must be Logged in to continure</h2>
                <LoginFormModal prop={true} />
            </div>
        )
    }

    if (!songs) {
        console.log("no songs")
        return null;
    }
    return (
        <div className='songDiv'>
            <h1>All Songs:</h1>
            {songs.map((song) => (
                <div key={song.id}>
                    <Link to={`/library/${song.id}`}> {song.title} </Link>
                </div>
            ))}

        </div>
    )

}

export default Songs
