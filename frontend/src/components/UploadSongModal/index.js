import React, { useState } from 'react';
import { Modal } from '../../Context/Modal';
import UploadForm from './UploadForm';


function UploadSongModal({ prop = false }) {
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
                Add Song
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <UploadForm />
                </Modal>
            )}
        </>
    );
}

export default UploadSongModal;
