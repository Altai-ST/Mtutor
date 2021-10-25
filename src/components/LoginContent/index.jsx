import React, {useState} from "react";
import { Button, Form } from "react-bootstrap";
import LoginModal from "../LoginModal";


export const LoginContent = ()=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)
    };
    const title='Введите Ваш логин и пароль'
    return(
        <div>
            <Button onClick={handleShow}>Войти</Button>
            <LoginModal show={show} handleClose={handleClose} onClose={true} title={title} >
                <Form>
                    <Form.Group>
                        <div>
                            <Form.Label >icon</Form.Label>
                            <div>
                                <Form.Control type="fullName" placeholder="Email"></Form.Control>
                            </div>
                        </div>
                    </Form.Group>
                    <Form.Group>
                        <div>
                            <Form.Label >icon</Form.Label>
                            <div>
                                <Form.Control type="fullName" placeholder="Password"></Form.Control>
                            </div>
                        </div>
                    </Form.Group>
                </Form>
            </LoginModal>
        </div>
    )
}