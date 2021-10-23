import React, { useEffect, useState } from 'react';
import { Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from './_putPassword.module.scss'
import { useDispatch } from 'react-redux';
import { FormSet, SetPassword } from '../../redux/actions';
import { sendData } from '../../container/httpRequest';
import { useSelector } from 'react-redux';

const PutPassword =()=>{
    const [formDataPassword, setFormDataPassword]=useState({
        password:'',
    })
    const [passwords, setPasswords]=useState('')
    const [stateBtn, setStateBtn]=useState(true)
    const [passwordError, setPasswordError]=useState({
        password:false,
        checkPassword:false,
    })



    const [checkPasswordError,setCheckPasswordError]=useState(false)
    const [checkPasswordNull, setCheckPasswordNull]=useState('Пароль не совпадает')

    const [passwordNull, setPasswordNull]=useState({
        password: 'Пароль не должен быть пустым',
        checkPassword: 'Пароль не совпадает',
    })

    const dispatch=useDispatch()
    const states = useSelector(state=>state.formEmail)
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formDataPassword)
        dispatch(SetPassword(formDataPassword))
        sendData(states);
    }

    const handleChange=(val)=>{
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
            }else{
                setPasswordError({...passwordError, password: true})
                setPasswordNull({...passwordNull,password:'Пароль не должен быть со специальным символом и с цифрой'})
            }
            if(val.target.value === '' || formDataPassword.password === '' 
            || val.target.value !== formDataPassword.password){
                setCheckPasswordError(true)
                setStateBtn(true)
            }else if(val.target.value === formDataPassword.password ){
                setStateBtn(false)
            }
            setPasswords(val.target.value)
        }
        if(val.target.name ==='checkPassword'){
            if(val.target.value === '' || passwords === '' || val.target.value !== passwords){
                setCheckPasswordError(true)
                setStateBtn(true)
            }else if(val.target.value === passwords){
                setCheckPasswordError(false)
                setStateBtn(false)
            }
            setFormDataPassword({...formDataPassword, password: val.target.value})
        }
    }


    return(
        <div className={style.register}>
            <div className={style.Cards}>
               <Card>
                <Card.Header className={style.headCard}>
                    Регистрация
                    </Card.Header>
                <Form onSubmit={handleSubmit} className='mt-2'>
                <Card.Body>
                    <div className={style.header}>
                        <h5>Для завершения регистрации введите пароль</h5>
                    </div>
                        <Form.Group className={style.formBlock}>
                            <div className={style.formGroup}>
                                <Form.Label className={style.formLabel}>Пароль</Form.Label>
                                <div className={style.control}>
                                    <Form.Control 
                                    name='password'
                                    onChange={e => handleChange(e)}
                                    value={passwords} 
                                    type="password"></Form.Control>
                                </div>
                                {(passwordError.password) && <div style={{color:'red'}}>
                                    {passwordNull.password}
                                    </div>}
                                <small>Не менее 6 символов (букв, цифр)</small>
                            </div>
                        </Form.Group>
                        <Form.Group className={style.formBlock+' '+'mt-3'}>
                            <div className={style.formGroup}>
                                <Form.Label className={style.formLabel}>Подтвердите пароль</Form.Label>
                                <div className={style.control}>
                                    <Form.Control
                                    name='checkPassword'
                                    value={formDataPassword.password}
                                    onChange={e=>handleChange(e)} 
                                    type="password"></Form.Control>
                                </div>
                                {(checkPasswordError) && <div style={{color:'red'}}>
                                    {checkPasswordNull}
                                    </div>}
                            </div>
                        </Form.Group>
                </Card.Body>
                <Card.Footer className='mt-3'>
                    <div className={style.btnGroup}>
                        <Link></Link>
                        <Button type='submit' disabled={stateBtn} className={style.btn}>   Зарегистрировать</Button>
                    </div>
                </Card.Footer>
                </Form>
            </Card> 
            </div>
            
            
        </div>
    )
}

export default PutPassword