import React, { useEffect, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import style from './_register.module.scss'
import { Link, useHistory } from "react-router-dom";
import {IMaskInput} from 'react-imask'
import { useDispatch } from "react-redux";
import { FormSet } from "../../redux/actions";
import { useSelector } from "react-redux";
const Register =()=>{
    const dispatch = useDispatch()
    const history = useHistory()
    const [formData, setFormData] = useState({
        email:'',
        phone:'',
        fullName:'',
        role:'',
        password:'',
    })

    const [emailError, setEmailError]=useState(false)
    const [submits, setSubmits]=useState(true)

    const historys = useHistory()
    const states = useSelector(state => state.Autorization.formEmail)
    if (window.performance) {
        console.log("Perfomance not supported");
    }
    if (performance.navigation.type == 1) {
        if (states.role !== ''){
            historys.push('/register')
        }else{
            historys.push('/chooseRole')
        }
    }

    const stateForm = useEffect(()=>{
        if(!emailError && formData.phone !== '' && formData.fullName !== '' && formData.phone.length > 11){
            setSubmits(false)
        }else{
            setSubmits(true)
        }
    },[formData])

    
    const hadleSubmit=(e)=>{
        e.preventDefault()
        dispatch(FormSet(formData))
        history.push('/password')
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
                                    onChange={e=>hadleChange(e)}
                                    name='fullName'
                                     type="fullName" placeholder="Фамилия Имя Отчество"></Form.Control>
                                </div>
                            </div>
                        </Form.Group>
                        <Form.Group className='mt-3'>
                            <div className={style.formGroup}>
                                <Form.Label className={style.formLabel}>Email</Form.Label>
                                <div className={style.control}>
                                    <Form.Control onChange={e=>hadleChange(e)} value={formData.email} 
                                    type="email"
                                    name='email'
                                    placeholder="example@gmail.com"></Form.Control>
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
                                    onAccept={(value,mask)=>handleMask(value)}
                                    unmask={true}
                                >
                                </IMaskInput>
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