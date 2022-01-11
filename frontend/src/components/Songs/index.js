import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, Redirect } from 'react-router-dom';
import { getSongs } from '../../store/songs';
import LoginFormModal from '../LoginFormModal';




const Songs = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSongs());
    }, [dispatch]);

    const songs = useSelector(state => {
        return state.songs.list;
    });

    const sessionUser = useSelector((state) => state.session.user);

    if (!sessionUser) {
        return <LoginFormModal prop={true} />
    }

    if (!songs) {
        console.log("no songs")
        return null;
    }
    return (
        <div className='songDiv'>
            <h1>All Songs:</h1>
            {songs.map((song) => (
                <div>

                    <Link key={song.id} to={`/songs/${song.id}`}> Title: {song.title} </Link>

                </div>
            ))}

        </div>
    )

}

export default Songs
