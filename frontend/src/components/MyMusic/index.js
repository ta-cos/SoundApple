import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSongsById } from '../../store/songs';
import { getAlbumsById } from '../../store/albums'
import UploadSongModal from '../UploadSongModal';
import AddAlbumModal from '../AddAlbumModal';
import RemoveSongModal from '../DeleteSongModal'
import EditSongModal from '../EditSongModal';
import DeleteAlbumModal from '../DeleteAlbumModal';

import './MyMusic.css'

function MyMusic() {

    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);

    useEffect(() => {
        dispatch(getSongsById(sessionUser.id))
        dispatch(getAlbumsById(sessionUser.id))

    }, [dispatch]);

    const songs = useSelector(state => {
        return state.songs.list;
    });

    const albums = useSelector(state => {
        return state.albums.list
    })


    return (
        <div>
            <div className="albums-div">
                <div className='header'>
                    <h1>My Albums</h1>
                    <AddAlbumModal />
                    <DeleteAlbumModal />
                </div>
                <div id='myAlbumContent'>
                    {albums.map((album) => (
                        <div id='myAlbum' key={album.title}>
                            <img id="album-img" src={album.img}></img>
                            <h1 to={`/songs/${album.id}`}> {album.title} </h1>
                        </div>
                    ))}
                </div>
            </div>
            <div className="songs-div">
                <div className='header'>
                    <h1>My Songs</h1>
                    <UploadSongModal />
                    <EditSongModal />
                    <RemoveSongModal />
                </div>
                {songs.map((song) => (
                    <div key={song.title}>
                        <h1 to={`/songs/${song.id}`}> {song.title} </h1>
                    </div>
                ))}

            </div>

        </div>
    );
}

export default MyMusic;
