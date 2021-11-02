import React, {useState} from "react";
import { Button, Form } from "react-bootstrap";
import LoginModal from "../../components/LoginModal";
import { FaUserAlt, FaLock } from "react-icons/fa"
import style from './loginContent.module.scss'
import { useDispatch } from "react-redux";
import { saveToken, saveUser } from "../../store/actions";
import { signin } from "../../container/httpRequest";
import { USERSTORE } from "../../util/constants";

export const LoginContent = ()=>{
    const [show, setShow] = useState(false);
    const [login, setLogin]=useState({
        email:'',
        password:''
    })

    const [emailError, setEmailError]=useState(false)
    const [stateBtn, setStateBtn]=useState(true)

    const handleClose = () => setShow(false);
    const dispatch = useDispatch()

    const handleShow = () => {
        setShow(true)
    };


    const handleChange=(val)=>{
        if(val.target.name === 'email'){
            if(val.target.value.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/)){
                setEmailError(false)
                setLogin({...login, email: val.target.value})
            }else{
                setEmailError(true)
                setLogin({...login, email: val.target.value})
                setStateBtn(true)
            }
        }
        if(val.target.name === 'password'){
            setStateBtn(false)
            setLogin({...login, password: val.target.value})
        }
    }   

    const title='Введите Ваш логин и пароль'

    const handleSubmit=async(e)=>{
        e.preventDefault()
        console.log(login.email)
        const res = await signin(login)
        dispatch(saveToken(res.token))
        dispatch(saveUser(res.user))
        localStorage.setItem(USERSTORE, JSON.stringify(res.token))
    }

    return(
        <div>
            <Button onClick={handleShow}>Войти</Button>
            <LoginModal show={show} handleClose={handleClose} onClose={true} title={title} >
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <div className={style.userAlt}>
                            <Form.Label className={style.icon}><FaUserAlt></FaUserAlt></Form.Label>
                            <div>
                                <Form.Control
                                 onChange={e=>handleChange(e)} 
                                 className={style.emailForm} 
                                 type="email"
                                 name='email' 
                                 placeholder="Email"></Form.Control>
                            </div>
                        </div>
                        {(emailError) && <div style={{color:'red'}}>
                                Не правильно веден логин
                            </div>}
                    </Form.Group>
                    <Form.Group>
                        <div className={style.lock}>
                            <Form.Label className={style.icon}><FaLock></FaLock></Form.Label>
                            <div>
                                <Form.Control 
                                className={style.emailForm} 
                                onChange={e=>handleChange(e)} 
                                type="password"
                                name='password' 
                                placeholder="Password"></Form.Control>
                            </div>
                        </div>
                    </Form.Group>
                    <Form.Group className={style.btnGroup}>
                        <Button disabled={stateBtn} className={style.btnSignIn} type='submit' onClick={handleClose}>Войти</Button>
                        <Button className={'mx-2 '+style.btnSignIn} onClick={handleClose}>Отмена</Button>
                    </Form.Group>
                </Form>
            </LoginModal>
        </div>
    )
}