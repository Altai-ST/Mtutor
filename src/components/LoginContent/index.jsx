import React, {useState} from "react";
import { Button, Form } from "react-bootstrap";
import LoginModal from "../LoginModal";
import { FaUserAlt, FaLock } from "react-icons/fa"
import style from './loginContent.module.scss'
import { useDispatch } from "react-redux";
import { saveToken } from "../../redux/actions";
import { signin } from "../../container/httpRequest";


export const LoginContent = ()=>{
    const [show, setShow] = useState(false);
    const [login, setLogin]=useState({
        email:'',
        password:''
    })

    const [emailError, setEmailError]=useState(true)
    const [stateBtn, setStateBtn]=useState(true)

    const [passwordNull, setPasswordNull]=useState({
        password: 'Пароль не должен быть пустым',
    })
    const [passwordError, setPasswordError]=useState({
        password:true,
    })

    const handleClose = () => setShow(false);
    const dispatch = useDispatch()

    

    const handleShow = () => {
        setShow(true)
    };


    const handleChange=(val)=>{
        if(val.target.name === 'email'){
            if(val.target.value.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/)){
                setEmailError(false)
                console.log(val.target.value)
                setLogin({...login, email: val.target.value})
            }else{
                setEmailError(true)
                console.log(val.target.value)
                setLogin({...login, email: val.target.value})
                setStateBtn(true)
            }
        }
        if(val.target.name === 'password'){
            if(val.target.value === ''){
                console.log(passwordError.password)
                setPasswordNull({...passwordNull,password:'Пароль не должен быть пустым'})
                setPasswordError({...passwordError, password: true})
            }else if(val.target.value.length < 8){
                setPasswordError({...passwordError, password: true})
                setPasswordNull({...passwordNull,password:'Пароль не должен быть меньше 8'})
            }else if(val.target.value > 15){
                setPasswordError({...passwordError, password: true})
                setPasswordNull({...passwordNull,password:'Пароль не должен быть небольше 15'})
            }else if(val.target.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)){
                setPasswordError({...passwordError, password: false})
                setStateBtn(false)
            }else{
                setPasswordError({...passwordError, password: true})
                setPasswordNull({...passwordNull,password:'Пароль должен быть со специальным символом и цифрой'})
            }
            setLogin({...login, password: val.target.value})
        }
    }   

    const title='Введите Ваш логин и пароль'

    const handleSubmit=async(e)=>{
        e.preventDefault()
        console.log(login.email)
        const res = await signin(login)
        dispatch(saveToken(res))
        localStorage.setItem('tokens', JSON.stringify(res))
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
                        {(passwordError.password) && <div style={{color:'red'}}>
                                    {passwordNull.password}
                                    </div>}
                    </Form.Group>
                    <Button disabled={stateBtn} className='mt-5' type='submit' onClick={handleClose}>Войти</Button>
                    <Button className='mt-5 mx-2' onClick={handleClose}>Отмена</Button>
                </Form>
            </LoginModal>
        </div>
    )
}