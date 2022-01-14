import React, { useState } from 'react';
import { Modal } from '../../Context/Modal';
import DeleteAlbumForm from './DeleteAlbumForm';


function DeleteAlbumModal({ prop = false }) {
    const [showModal, setShowModal] = useState(prop);
    const hideButtonStyle = {
        display: 'none',
    }

    return (
        <>
            <button
                onClick={() => setShowModal(true)}
                style={prop ? hideButtonStyle : null}
            >
                Remove Album
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeleteAlbumForm />
                </Modal>
            )}
        </>
    );
}

export default DeleteAlbumModal;
