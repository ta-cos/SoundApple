import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import songReducer, { deleteSong, getSongs, updateSong } from '../../store/songs';


const SongDetails = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
    console.log(id)
    const history = useHistory();


    useEffect(() => {
        dispatch(getSongs())
    }, [dispatch])

    const songs = useSelector((state) => state.songs.list)
    const thisSong = songs.find(ele => ele.id === +id)
    const sessionUser = useSelector((state) => state.session.user);
    const userId = sessionUser.id


    const handleDelete = async () => {
        const deletedSong = await dispatch(deleteSong(id))
        if (deletedSong)
            history.goBack()
    }

    return (
        <div className='songDiv'>
            <h1>Song Details</h1>
            <h3>{thisSong.title}</h3>
            <h3>{thisSong.albumId}</h3>
            <h3>{thisSong.url}</h3>
            <button onClick={handleDelete}>DELETE</button>
            <Link to={`/songs/${id}/edit`}>EDIT</Link>

        </div>
    )

}

export default SongDetails
