import React, { useState } from 'react';
import { Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from './_putPassword.module.scss'
import { sendData } from '../../container/httpRequest';
import Register from '../Register/register';

const PutPassword =(data)=>{
    const [formDataPassword, setFormDataPassword]=useState({
        email:data.email,
        phone:data.phone,
        fullName:data.fullName,
        role:'',
        password:'',
    })
    const [passwords, setPasswords]=useState('')
    const [stateBtn, setStateBtn]=useState(true)

    const handleSubmit=(e)=>{
        e.preventDefault()
        sendData(formDataPassword)
    }


    const handleChangePassword=(val)=>{
        setPasswords(val.target.value)
    }

    const handleChange=(val)=>{
        if(val.target.name =='checkPassword'){
            setFormDataPassword({...formDataPassword, password: val.target.value})
        }
        if(val.target.value === passwords){
            setStateBtn(false)
        }else if(val.target.value === ''){
            setStateBtn(true)
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
                            <div className={style.formGroup}>d
                                <Form.Label className={style.formLabel}>Пароль</Form.Label>
                                <div className={style.control}>
                                    <Form.Control 
                                    onChange={e => handleChangePassword(e)}
                                    value={passwords} 
                                    type="password"></Form.Control>
                                </div>
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
                            </div>
                        </Form.Group>
                </Card.Body>
                <Card.Footer className='mt-3'>
                    <div className={style.btnGroup}>
                        <Link></Link>
                        <Button type='submit ' disabled={stateBtn} className={style.btn}>   Зарегистрировать</Button>
                    </div>
                </Card.Footer>
                </Form>
            </Card> 
            </div>
            
            
        </div>
    )
}

export default PutPassword