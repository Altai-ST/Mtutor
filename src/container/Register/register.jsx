import React, { useEffect, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import style from './_register.module.scss'
import { Link, Redirect } from "react-router-dom";
import {IMaskInput} from 'react-imask'
import { useDispatch } from "react-redux";
import { FormSet } from "../../store/actions";
import { useSelector } from "react-redux";
const Register =()=>{
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        email:'',
        phone:'',
        fullName:'',
        role:'',
        password:'',
    })

    const [emailError, setEmailError]=useState(false)
    const [submits, setSubmits]=useState(true)

    const states = useSelector(state => state.Autorization.formEmail)
    

    useEffect(()=>{
        if(!emailError && formData.phone !== '' && formData.fullName !== '' && formData.phone.length > 11){
            setSubmits(false)
        }else{
            setSubmits(true)
        }
    },[formData])

    
    const hadleSubmit=(e)=>{
        e.preventDefault()
        dispatch(FormSet(formData))
    }

    const hadleChange=(val)=>{
        if(val.target.name === 'email'){
            if(val.target.value.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/)){
                setEmailError(false)
                setFormData({...formData, email: val.target.value})
            }else{
                setEmailError(true)
                setFormData({...formData, email: val.target.value})
            }
        }else if(val.target.name === 'phone'){
            setFormData({...formData, phone: val.target.value})
        }else if(val.target.name ==='fullName'){
            setFormData({...formData, fullName: val.target.value})
        }

    }
    
    const handleMask=(val)=>{
        setSubmits(false)
        setFormData({...formData, phone: val})
    }

    if (states.role === ''){
        return <Redirect to='/chooseRole'/>
    }
    
    if(states.email !== ''){
        return <Redirect to='/password'/>
    }
    

    return(
        <div className={style.register}>
            <div className={style.Cards}>
               <Card>
                <Card.Header className={style.headCard}>
                    Регистрация
                    </Card.Header>
                <Card.Body>
                    <Form className='mt-2' onSubmit={hadleSubmit}>
                        <Form.Group>
                            <div className={style.formGroup}>
                                <Form.Label className={style.formLabel}>ФИО</Form.Label>
                                <div className={style.control}>
                                    <Form.Control 
                                    value={formData.fullName} 
                                    onChange={hadleChange}
                                    name='fullName'
                                    type="fullName" placeholder="Фамилия Имя Отчество"/>
                                </div>
                            </div>
                        </Form.Group>
                        <Form.Group className='mt-3'>
                            <div className={style.formGroup}>
                                <Form.Label className={style.formLabel}>Email</Form.Label>
                                <div className={style.control}>
                                    <Form.Control onChange={hadleChange} value={formData.email} 
                                    type="email"
                                    name='email'
                                    placeholder="example@gmail.com"/>
                                    {(emailError) && <div style={{color:'red'}}>
                                    Не правильно веден логин
                                    </div>}
                                </div>
                                
                            </div>
                        </Form.Group>
                        <Form.Group className='mt-3'>
                            <div className={style.formGroup3}>
                                <Form.Label className={style.formLabel}>Моб. телефон</Form.Label>
                                <div className={style.control}>
                                <IMaskInput
                                    className='form-control'
                                    mask={'+{996}(000)000-000'}
                                    radix='.'
                                    value={formData.phone}
                                    name='phone'
                                    onAccept={(value)=>handleMask(value)}
                                    unmask={false}
                                />
                                </div>
                            </div>
                        </Form.Group>
                        <Form.Group className='mt-3'>
                            <div className={style.btnGroup}>
                                <Button type='submit' disabled={submits}  className={style.btn}>
                                        Подтвердить
                                        </Button>
                                <Link to='/chooseRole'>
                                    <Button className={style.btn}>Отмена</Button>
                                </Link>
                            </div>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card> 
            </div>
        </div>
    )
}

export default Register