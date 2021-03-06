import React from "react";
import { Button, Modal } from "react-bootstrap";


const LoginModal=({show, handleClose, children, onClose=null, title})=>{
    return(
        <div>
            <Modal
            show={show}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                            <h5>{title}</h5>
                        </Modal.Title>
                        {onClose ? <button onClick={handleClose} className='btn-close' aria-label='Close'></button> : ''}
                    </Modal.Header>
                    <Modal.Body>
                        {children}
                    </Modal.Body>
            </Modal>
        </div>
    )
}

export default LoginModal