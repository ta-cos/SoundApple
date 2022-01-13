import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSongsById } from '../../store/songs';
import { getAlbumsById } from '../../store/albums'
import UploadSongModal from '../UploadSongModal';
import AddAlbumModal from '../AddAlbumModal';
import RemoveSongModal from '../DeleteSongModal'
import EditSongModal from '../EditSongModal';

import './MyMusic.css'

function MyMusic() {

    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);

    useEffect(() => {
        dispatch(getSongsById(sessionUser.id))
        dispatch(getAlbumsById(sessionUser.id))
    }, []);

    const songs = useSelector(state => {
        return state.songs.list;
    });

    const albums = useSelector(state => {
        return state.albums.list
    })

    const handleRemoveAlbum = () => {
        console.log("removed Album.... not really though")
    }

    return (
        <div>
            <div className="albums-div">
                <h1>My Albums</h1>
                {albums.map((album) => (
                    <div key={album.title}>
                        <Link to={`/songs/${album.id}`}> {album.title} </Link>
                    </div>
                ))}
                <AddAlbumModal />
                <button onClick={handleRemoveAlbum}>Remove Album</button>
            </div>
            <div className="songs-div">
                <h1>My Songs</h1>
                {songs.map((song) => (
                    <div key={song.title}>
                        <Link to={`/songs/${song.id}`}> {song.title} </Link>
                    </div>
                ))}
                <UploadSongModal />
                <EditSongModal />
                <RemoveSongModal />
            </div>

        </div>
    );
}

export default MyMusic;
