import React, {useState} from "react";
import { Button, Form } from "react-bootstrap";
import LoginModal from "../../components/LoginModal";
import { FaUserAlt, FaLock } from "react-icons/fa"
import style from './loginContent.module.scss'
import { useDispatch } from "react-redux";
import { saveToken, saveUser } from "../../store/actions";
import { signin } from "../../container/httpRequest";
import { USER_STORE } from "../../util/constants/keys";
import { setLocalStorage } from "../../util/constants/localStorage";
import {Redirect} from 'react-router'
import { successToastifys } from "../SuccessToastify";
import load from '../../assects/image/loading-btn.gif'

export const LoginContent = ()=>{
    const [show, setShow] = useState(false);
    const [login, setLogin]=useState({
        email:'',
        password:''
    })

    const [emailError, setEmailError] = useState(false)
    const [stateBtn, setStateBtn] = useState(true)
    const [loading, setLoading] = useState(false)

    const handleClose = () =>{
        setShow(false)
    };
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
        setLoading(true)
        const res = await signin(login)
        setShow(false)
        if (res !== null){
            console.log(res)
            dispatch(saveToken(res.token))
            dispatch(saveUser(res.user))
            setLocalStorage(USER_STORE, JSON.stringify(res.token))
            successToastifys('Success login!!!')
        }
        setLoading(false)
        
        if(res){
            return <Redirect to='/tutorQual'/>
        }
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
                    <Form.Group className={style.btnGroup}>{loading ?
                    <img className={style.btnLoad} src={load} alt="" />
                    :   <Button 
                            disabled={stateBtn} 
                            className={style.btnSignIn} type='submit' >
                                Войти
                                
                        </Button>   
                        }
                        
                        <Button className={'mx-2 '+style.btnSignIn} onClick={handleClose}>Отмена</Button>
                    </Form.Group>
                </Form>
            </LoginModal>
        </div>
    )
}