import React, { useState } from 'react';
import { Modal } from '../../Context/Modal';
import LoginForm from './LoginForm';

function LoginFormModal({ prop = false }) {
    const [showModal, setShowModal] = useState(prop);

    return (
        <>
            <button onClick={() => setShowModal(true)}>Sign In</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <LoginForm />
                </Modal>
            )}
        </>
    );
}

export default LoginFormModal;
