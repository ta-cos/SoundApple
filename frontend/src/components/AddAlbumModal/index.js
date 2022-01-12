import React, { useState } from 'react';
import { Modal } from '../../Context/Modal';
import AddAlbumForm from './AddAlbumForm';

function AddAlbumModal({ prop = false }) {
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
                Add Album
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <AddAlbumForm />
                </Modal>
            )}
        </>
    );
}

export default AddAlbumModal;
