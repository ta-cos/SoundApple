import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { deleteSong, updateSong } from '../../store/songs';


const SongDetails = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
    const history = useHistory();

    const handleDelete = async () => {
        const deletedSong = await dispatch(deleteSong(id))
        if (deletedSong)
            history.goBack()
    }

    const handleEdit = async () => {
        console.log("edit")
        const updatedSong = await dispatch(updateSong())
    }

    return (
        <div className='songDiv'>
            <h1>Song Details</h1>
            <button onClick={handleDelete}>DELETE</button>
            <Link to={`/songs/${id}/edit`}>EDIT</Link>

        </div>
    )

}

export default SongDetails
