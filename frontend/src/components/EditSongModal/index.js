import React, { useState } from 'react';
import { Modal } from '../../Context/Modal';
import EditSongForm from './EditSongForm';

function EditSongModal({ prop = false }) {
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
                Edit Song
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditSongForm />
                </Modal>
            )}
        </>
    );
}

export default EditSongModal;
