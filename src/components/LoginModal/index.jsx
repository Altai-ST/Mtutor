import React,{useState} from "react";
import { Button, Modal, Form } from "react-bootstrap";


const LoginModal=()=>{

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
            <Button onClick={handleShow}>Войти</Button>
            <Modal show={show} onHide={handleClose} className='mt-5'>
                <Modal.Header className='p-0'>
                    <Modal.Title>
                        <h5 style={{color:'black'}} className={'mt-3'+' '+'mx-3'}>Введите Ваш логин и пароль</h5>
                    </Modal.Title>
                    <button onClick={handleClose} type="button" style={{margin:0}} class="btn-close" aria-label="Close"></button>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <span></span>
                            <Form.Control type='email' placeholder='Email'></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <span></span>
                            <Form.Control type='password' placeholder='Password'></Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Вход</Button>
                    <a href="#" onClick={handleClose}>Забыли пароль?</a>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default LoginModal