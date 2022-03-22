import React, { useState } from 'react';
import { Modal } from '../../Context/Modal';
import DeleteSongForm from './DeleteSongForm';


function DeleteSongModal({ prop = false }) {
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
                Remove Song
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeleteSongForm open={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default DeleteSongModal;
