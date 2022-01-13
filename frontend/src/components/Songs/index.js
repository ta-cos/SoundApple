import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSongs } from '../../store/songs';
import LoginFormModal from '../LoginFormModal';
import Player from '../Player'


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
                <img alt='a sad kitten' className='sadCat' src="https://media.istockphoto.com/photos/cute-kitten-portrait-british-shorthair-cat-picture-id916159418?k=20&m=916159418&s=612x612&w=0&h=rHUiHZGWTjqPyO7ArbEHWUpezE5u46ncxDCH24Vrj9M="></img>
                <h2>Dr. fluffy says you must be Logged in to continue</h2>
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
            {songs.map((song) => (
                <div key={song?.id} className='song-container'>
                    <img alt='the album cover' className='song-img' src={song?.Album?.img} />
                    <Link className="title" to={`/library/${song?.id}`}> {song?.title} </Link>
                    <Player prop={song?.audio} />
                </div>

            ))}
        </div>
    )

}

export default Songs
