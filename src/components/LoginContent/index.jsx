import React, {useState} from "react";
import { Button, Form } from "react-bootstrap";
import LoginModal from "../LoginModal";
import { FaUserAlt, FaLock } from "react-icons/fa"
import style from './loginContent.module.scss'

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
                        <div className={style.userAlt}>
                            <Form.Label className={style.icon}><FaUserAlt></FaUserAlt></Form.Label>
                            <div>
                                <Form.Control className={style.emailForm} type="fullName" placeholder="Email"></Form.Control>
                            </div>
                        </div>
                    </Form.Group>
                    <Form.Group>
                        <div className={style.lock}>
                            <Form.Label className={style.icon}><FaLock></FaLock></Form.Label>
                            <div>
                                <Form.Control className={style.emailForm} type="fullName" placeholder="Password"></Form.Control>
                            </div>
                        </div>
                    </Form.Group>
                </Form>
            </LoginModal>
        </div>
    )
}